import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, empresa, telefone, area, mensagem } = body;

    // Basic Validation
    if (!nome || !email || !empresa || !telefone) {
      return NextResponse.json(
        { error: "Por favor, preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    const emailTo = process.env.CONTACT_EMAIL_TO || "contato@lamonyx.com.br";
    const resendApiKey = process.env.RESEND_API_KEY;

    // Render HTML template for lead email
    const emailSubject = `🚨 Novo Lead Comercial - ${nome} (${empresa})`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a1420; color: #e8eef4; padding: 24px; border-radius: 16px; border: 1px solid #1a2a3a;">
        <div style="border-b: 1px solid #38C6D8; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #38C6D8; margin: 0;">Lamonyx Technologies — Solicitação de Contato</h2>
          <p style="color: #90a3b4; font-size: 14px; margin: 4px 0 0 0;">Recebido via formulário de contato do site</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #90a3b4; font-size: 13px; width: 140px;">Nome:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${nome}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #90a3b4; font-size: 13px;">E-mail:</td>
            <td style="padding: 8px 0; color: #38C6D8; font-weight: bold;"><a href="mailto:${email}" style="color: #38C6D8; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #90a3b4; font-size: 13px;">Empresa:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${empresa}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #90a3b4; font-size: 13px;">Telefone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #46C48E; font-weight: bold;">${telefone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #90a3b4; font-size: 13px;">Área de Interesse:</td>
            <td style="padding: 8px 0; color: #ffffff;">${area || "Não informada"}</td>
          </tr>
        </table>

        <div style="background: #12202f; padding: 16px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #38C6D8;">
          <p style="color: #90a3b4; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Mensagem / Resumo do Cenário:</p>
          <p style="color: #ffffff; font-size: 14px; margin: 0; line-height: 1.5;">${mensagem ? mensagem.replace(/\n/g, "<br/>") : "Nenhum detalhe adicional informado."}</p>
        </div>

        <div style="font-size: 11px; color: #5a6b7b; text-align: center; border-t: 1px solid #1a2a3a; padding-top: 16px;">
          Enviado em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })} · Lamonyx System
        </div>
      </div>
    `;

    // 1. If RESEND_API_KEY is defined, send via Resend API
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Lamonyx Contato <onboarding@resend.dev>",
          to: [emailTo],
          subject: emailSubject,
          html: emailHtml,
          reply_to: email,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json();
        console.error("Erro ao enviar e-mail via Resend:", errorData);
        return NextResponse.json(
          { error: "Falha no envio de e-mail via provedor. Tente novamente." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, provider: "resend" });
    }

    // 2. Fallback Webhook support (e.g. Discord, Slack, Zapier, Web3Forms if configured)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: emailSubject,
          embeds: [
            {
              title: `Novo Lead: ${nome}`,
              description: mensagem || "Sem detalhes",
              fields: [
                { name: "Empresa", value: empresa, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Telefone", value: telefone, inline: true },
                { name: "Área", value: area || "Geral", inline: true },
              ],
              color: 0x38c6d8,
            },
          ],
        }),
      });

      return NextResponse.json({ success: true, provider: "webhook" });
    }

    // 3. If no key configured in environment yet, return success and log for admin setup
    console.log("📥 [LEAD RECEBIDO NO SITE]:", { nome, email, empresa, telefone, area, mensagem });
    return NextResponse.json({
      success: true,
      notice: "Solicitação recebida com sucesso. Para entrega direta via e-mail corporativo, configure RESEND_API_KEY no painel da Vercel.",
    });

  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno ao processar a solicitação." },
      { status: 500 }
    );
  }
}

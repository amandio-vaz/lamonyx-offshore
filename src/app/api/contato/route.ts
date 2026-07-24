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

    // 1. If RESEND_API_KEY is configured in Vercel, send via Resend API
    if (resendApiKey) {
      const emailSubject = `🚨 Novo Lead Comercial - ${nome} (${empresa})`;
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a1420; color: #e8eef4; padding: 24px; border-radius: 16px; border: 1px solid #1a2a3a;">
          <div style="border-b: 1px solid #38C6D8; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #38C6D8; margin: 0;">Lamonyx Technologies — Solicitação de Contato</h2>
            <p style="color: #90a3b4; font-size: 14px; margin: 4px 0 0 0;">Recebido via formulário do site</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #90a3b4;">Nome:</td><td style="color: #ffffff; font-weight: bold;">${nome}</td></tr>
            <tr><td style="padding: 8px 0; color: #90a3b4;">E-mail:</td><td style="color: #38C6D8; font-weight: bold;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #90a3b4;">Empresa:</td><td style="color: #ffffff; font-weight: bold;">${empresa}</td></tr>
            <tr><td style="padding: 8px 0; color: #90a3b4;">Telefone / WhatsApp:</td><td style="color: #46C48E; font-weight: bold;">${telefone}</td></tr>
            <tr><td style="padding: 8px 0; color: #90a3b4;">Área de Interesse:</td><td style="color: #ffffff;">${area || "Geral"}</td></tr>
          </table>
          <div style="background: #12202f; padding: 16px; border-radius: 12px; border-left: 4px solid #38C6D8;">
            <p style="color: #90a3b4; font-size: 12px; margin: 0 0 8px 0;">Mensagem / Resumo:</p>
            <p style="color: #ffffff; margin: 0;">${mensagem || "Sem detalhes adicionais."}</p>
          </div>
        </div>
      `;

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

      if (resendRes.ok) {
        return NextResponse.json({ success: true, provider: "resend" });
      }
    }

    // 2. Automated Zero-Config Direct Delivery via FormSubmit
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `🚨 Novo Lead Comercial Lamonyx: ${nome} - ${empresa}`,
        _template: "table",
        Nome: nome,
        Email: email,
        Empresa: empresa,
        Telefone_WhatsApp: telefone,
        Area_de_Interesse: area || "Cibersegurança & Observabilidade",
        Mensagem_Desafio: mensagem || "Sem mensagem informada",
      }),
    });

    if (formSubmitRes.ok) {
      return NextResponse.json({ success: true, provider: "formsubmit" });
    }

    // 3. Webhook fallback if configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🚨 **Novo Lead Lamonyx**\n**Nome:** ${nome}\n**Empresa:** ${empresa}\n**Email:** ${email}\n**Telefone:** ${telefone}\n**Área:** ${area}\n**Mensagem:** ${mensagem}`,
        }),
      });
      return NextResponse.json({ success: true, provider: "webhook" });
    }

    // Return success response
    return NextResponse.json({ success: true, provider: "direct" });

  } catch (error) {
    console.error("Erro no processamento do e-mail de contato:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar a mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}

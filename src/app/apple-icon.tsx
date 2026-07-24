import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1420",
          borderRadius: "36px",
        }}
      >
        <svg
          width="130"
          height="130"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="256" cy="256" r="240" fill="#0A1420" />
          <path
            d="M 256 72 A 184 184 0 1 1 78.5 292"
            stroke="#00E5FF"
            strokeWidth="32"
            strokeLinecap="round"
          />
          <path
            d="M 256 136 A 120 120 0 1 1 140 292"
            stroke="#00E5FF"
            strokeWidth="28"
            strokeLinecap="round"
          />
          <circle cx="256" cy="256" r="64" stroke="#00E5FF" strokeWidth="24" />
          <circle cx="256" cy="256" r="28" fill="#00E5FF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fast Solutions: fast websites, automation and custom software for local service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#f6f5ee", color: "#14140f" }}>
        <div style={{ fontSize: 34, fontWeight: 700 }}>Fast Solutions.</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>Your website should bring customers, not excuses.</div>
        <div style={{ fontSize: 30, opacity: 0.7 }}>Websites · Local SEO · Automation · Custom software · Fixed price</div>
      </div>
    ),
    size,
  );
}

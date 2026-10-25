import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#1c1b17", color: "#f6f5ee", fontSize: 100, fontWeight: 700, position: "relative" }}>
        S
        <div style={{ position: "absolute", right: 34, bottom: 34, width: 18, height: 18, borderRadius: 5, background: "#2a56e8" }} />
      </div>
    ),
    size,
  );
}

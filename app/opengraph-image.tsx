import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TEDxSouthlake 2026: Unlearn — Let Go of What Limits You";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 85%, rgba(235,0,40,0.35), rgba(235,0,40,0) 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#eb0028",
              color: "#fff",
              fontSize: 40,
              fontWeight: 800,
              padding: "6px 16px",
            }}
          >
            TEDx
          </div>
          <div style={{ display: "flex", color: "#fff", fontSize: 40, fontWeight: 800 }}>
            Southlake
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#eb0028",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          7th Annual Conference · November 8, 2026
        </div>
        <div style={{ display: "flex", color: "#fff", fontSize: 108, fontWeight: 800, lineHeight: 1 }}>
          Unlearn
        </div>
        <div style={{ display: "flex", color: "#d1d5db", fontSize: 32, marginTop: 20 }}>
          Let Go of What Limits You
        </div>
      </div>
    ),
    { ...size }
  );
}

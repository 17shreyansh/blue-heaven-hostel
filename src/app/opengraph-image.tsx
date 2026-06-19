import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A56C4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            color: "#1A56C4",
            fontSize: 52,
            fontWeight: 800,
          }}
        >
          B
        </div>
        <div style={{ marginTop: 32, fontSize: 64, fontWeight: 800, color: "#FFFFFF" }}>
          Blue Heaven Hostel
        </div>
        <div style={{ marginTop: 16, fontSize: 28, color: "rgba(255,255,255,0.8)" }}>{SITE.tagline}</div>
      </div>
    ),
    { ...size }
  );
}

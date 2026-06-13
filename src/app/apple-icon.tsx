import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const { monogram } = site;

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
          background: "linear-gradient(165deg, #fdfbf8 0%, #f3ece2 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#9b2335",
            marginBottom: 8,
          }}
        >
          ♥
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 52,
            fontFamily: "Georgia, serif",
          }}
        >
          <span style={{ color: "#5c534a" }}>{monogram.groom}</span>
          <span style={{ color: "#9b2335" }}>{monogram.bride}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

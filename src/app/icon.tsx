import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const { monogram } = site;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fdfbf8",
          borderRadius: 8,
          fontSize: 11,
          fontFamily: "Georgia, serif",
          color: "#9b2335",
          gap: 1,
        }}
      >
        <span style={{ color: "#5c534a" }}>{monogram.groom}</span>
        <span style={{ fontSize: 8 }}>♥</span>
        <span>{monogram.bride}</span>
      </div>
    ),
    { ...size },
  );
}

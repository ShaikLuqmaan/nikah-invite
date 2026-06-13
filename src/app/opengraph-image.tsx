import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const { groom, bride, monogram, nikah } = site;

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
          background: "linear-gradient(165deg, #fdfbf8 0%, #f3ece2 50%, #fdfbf8 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(155,35,53,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 42,
            color: "#9b2335",
            marginBottom: 28,
            fontFamily: "Georgia, serif",
          }}
        >
          <span style={{ color: "#5c534a" }}>{monogram.groom}</span>
          <span>♥</span>
          <span>{monogram.bride}</span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#1e1a17",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {groom.name}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#9b2335",
            fontStyle: "italic",
            margin: "12px 0",
            fontFamily: "Georgia, serif",
          }}
        >
          &amp;
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: "#9b2335",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {bride.name}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 28,
            color: "#5c534a",
            fontFamily: "Georgia, serif",
          }}
        >
          {nikah.date}
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 20,
            color: "#8a8178",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Nikah Invitation
        </div>
      </div>
    ),
    { ...size },
  );
}

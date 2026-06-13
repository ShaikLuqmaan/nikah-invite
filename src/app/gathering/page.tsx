import type { Metadata } from "next";
import { InvitePage } from "@/components/invite-page";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.title} · Family Gathering`,
  description: "Nikah invitation with family gathering details",
};

export default function GatheringPage() {
  return <InvitePage showGathering={true} />;
}

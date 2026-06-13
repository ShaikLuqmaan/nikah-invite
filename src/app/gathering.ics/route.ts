import { site } from "@/lib/content";
import { buildIcsEvent } from "@/lib/calendar";

export function GET() {
  const { groom, bride, gathering } = site;
  const ics = buildIcsEvent({
    uid: `gathering-${groom.name}-${bride.name}@nikah-invite`,
    summary: `Family Gathering — ${groom.name} & ${bride.name}`,
    description: `${gathering.date}\n${gathering.time}. ${gathering.timeNote}`,
    location: `${gathering.venue}, ${gathering.location}`,
    start: gathering.calendar.start,
    end: gathering.calendar.end,
    timezone: gathering.calendar.timezone,
  });

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="gathering.ics"',
    },
  });
}

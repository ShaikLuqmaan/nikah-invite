import { site } from "@/lib/content";
import { buildIcsEvent } from "@/lib/calendar";

export function GET() {
  const { groom, bride, nikah } = site;
  const ics = buildIcsEvent({
    uid: `nikah-${groom.name}-${bride.name}@nikah-invite`,
    summary: `Nikah — ${groom.name} & ${bride.name}`,
    description: `${nikah.date}\n${nikah.time}. ${nikah.timeNote}`,
    location: `${nikah.venue}, ${nikah.location}`,
    start: nikah.calendar.start,
    end: nikah.calendar.end,
    timezone: nikah.calendar.timezone,
  });

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="nikah.ics"',
    },
  });
}

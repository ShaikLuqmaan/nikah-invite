interface CalendarEventInput {
  uid: string;
  summary: string;
  description: string;
  location: string;
  start: string;
  end: string;
  timezone: string;
}

function formatIcsDate(isoLocal: string): string {
  const compact = isoLocal.replace(/[-:]/g, "");
  return compact.split(".")[0] ?? compact;
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

export function buildIcsEvent(event: CalendarEventInput): string {
  const dtStart = formatIcsDate(event.start);
  const dtEnd = formatIcsDate(event.end);
  const isAllDay = dtStart.length === 8;

  const dtStartLine = isAllDay
    ? `DTSTART;VALUE=DATE:${dtStart}`
    : `DTSTART;TZID=${event.timezone}:${dtStart}`;
  const dtEndLine = isAllDay
    ? `DTEND;VALUE=DATE:${dtEnd}`
    : `DTEND;TZID=${event.timezone}:${dtEnd}`;

  const stamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nikah Invite//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.uid}`,
    `DTSTAMP:${stamp}`,
    dtStartLine,
    dtEndLine,
    `SUMMARY:${escapeIcsText(event.summary)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    `LOCATION:${escapeIcsText(event.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

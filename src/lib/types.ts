export interface CalendarConfig {
  start: string;
  end: string;
  timezone: string;
}

export interface SiteConfig {
  siteUrl: string;
  title: string;
  monogram: { groom: string; bride: string; groomArabic: string; brideArabic: string };
  groom: { name: string; nameArabic: string; parent: string };
  bride: { name: string; nameArabic: string; parent: string };
  families: string;
  nikah: {
    date: string;
    hijriDate: string;
    venue: string;
    location: string;
    time: string;
    timeNote: string;
    mapsUrl: string;
    calendar: CalendarConfig;
  };
  gathering: {
    date: string;
    venue: string;
    location: string;
    time: string;
    timeNote: string;
    mapsUrl: string;
    message: string;
    calendar: CalendarConfig;
  };
  notes: {
    walima: string;
    dua: {
      arabic: string;
      transliteration: string;
    };
  };
}

import Link from "next/link";
import { site } from "@/lib/content";
import {
  MonogramLogo,
  HeartIllustration,
  OrnamentDivider,
  PageWatermark,
} from "./decorations";
import { FadeIn } from "./fade-in";
import { CalendarIcon, MapPinIcon } from "./icons";

interface InvitePageProps {
  showGathering: boolean;
}

export function InvitePage({ showGathering }: InvitePageProps) {
  const { monogram, groom, bride, families, nikah, gathering, notes } = site;

  return (
    <div className="page">
      <PageWatermark groom={monogram.groom} bride={monogram.bride} />

      <FadeIn eager delay={0}>
        <nav className="nav" aria-label="Site">
          <MonogramLogo groom={monogram.groom} bride={monogram.bride} />
        </nav>
      </FadeIn>

      <main>
        <FadeIn eager delay={120}>
          <div className="bismillah">
            <OrnamentDivider />
            <p className="bismillah-ar" lang="ar">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="bismillah-en">In the name of Allah, the Most Gracious, the Most Merciful</p>
            <span className="red-accent-line" aria-hidden="true" />
          </div>
        </FadeIn>

        <header className="hero">
          <FadeIn eager delay={220}>
            <p className="hero-intro">
              By the grace of Almighty Allah, the families cordially invite you to honour the Nikah of
            </p>
          </FadeIn>

          <FadeIn eager delay={320}>
            <div className="person-block">
              <h1 className="person-name">{groom.name}</h1>
              <p className="person-parent">{groom.parent}</p>
            </div>
          </FadeIn>

          <FadeIn eager delay={420}>
            <p className="ampersand ampersand-reveal" aria-hidden="true">
              &amp;
            </p>
          </FadeIn>

          <FadeIn eager delay={520}>
            <div className="person-block">
              <h1 className="person-name bride">{bride.name}</h1>
              <p className="person-parent">{bride.parent}</p>
            </div>
          </FadeIn>

          <FadeIn eager delay={620}>
            <div className="heart-mark" aria-hidden="true">
              <HeartIllustration />
            </div>
          </FadeIn>
        </header>

        <OrnamentDivider />

        <FadeIn delay={0}>
          <blockquote className="ayah" cite="Quran 30:21">
            <p className="ayah-ar" lang="ar">
              وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <p className="ayah-en">&ldquo;And He placed between you affection and mercy.&rdquo;</p>
            <cite className="ayah-ref">Surah Ar-Rum · 30:21</cite>
          </blockquote>
        </FadeIn>

        <FadeIn delay={80}>
          <section className="section-spaced" aria-labelledby="nikah-heading">
            <h2 className="section-label" id="nikah-heading">
              The Nikah
            </h2>
            <div className="section-body">
              <div className="event-card">
                <p className="event-date">
                  {nikah.date}
                  {nikah.hijriDate && (
                    <>
                      <br />
                      <span className="event-hijri">{nikah.hijriDate}</span>
                    </>
                  )}
                </p>
                <div className="event-detail">
                  <strong>{nikah.venue}</strong>
                  <span>{nikah.location}</span>
                </div>
                <div className="event-detail event-detail-spaced">
                  <strong>{nikah.time}</strong>
                  <span>{nikah.timeNote}</span>
                </div>
                <div className="event-actions">
                  <Link className="map-link" href={nikah.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPinIcon />
                    Open in Maps
                  </Link>
                  <a className="calendar-link" href="/nikah.ics" download="nikah.ics">
                    <CalendarIcon />
                    Add to Calendar
                  </a>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {showGathering && (
          <FadeIn delay={80}>
            <section aria-labelledby="gathering-heading">
              <h2 className="section-label" id="gathering-heading">
                Family Gathering
              </h2>
              <div className="section-body">
                <div className="gathering-card">
                  <p className="note note-left">{gathering.message}</p>
                  <p className="event-date event-date-left">{gathering.date}</p>
                  <div className="event-detail">
                    <strong>{gathering.venue}</strong>
                    <span>{gathering.location}</span>
                  </div>
                  <div className="event-detail event-detail-spaced">
                    <strong>{gathering.time}</strong>
                    <span>{gathering.timeNote}</span>
                  </div>
                  <div className="event-actions event-actions-left">
                    <Link className="map-link" href={gathering.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPinIcon />
                      Open in Maps
                    </Link>
                    <a className="calendar-link" href="/gathering.ics" download="gathering.ics">
                      <CalendarIcon />
                      Add to Calendar
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>
        )}

        <OrnamentDivider />

        <FadeIn delay={80}>
          <section className="section-spaced" aria-labelledby="closing-heading">
            <h2 className="section-label" id="closing-heading">
              With love &amp; prayers
            </h2>
            <div className="section-body">
              <p className="families">{families}</p>
            <p className="note">
              We humbly request the honour of your presence and your heartfelt duas.
            </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0}>
          <blockquote className="ayah" cite="Quran 2:187">
            <p className="ayah-ar" lang="ar">
              هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ
            </p>
            <p className="ayah-en">&ldquo;They are clothing for you and you are clothing for them.&rdquo;</p>
            <cite className="ayah-ref">Surah Al-Baqarah · 2:187</cite>
          </blockquote>
        </FadeIn>

        <FadeIn delay={80}>
          <section className="closing-dua">
            <p className="closing-dua-ar" lang="ar">
              {notes.dua.arabic}
            </p>
            <p className="closing-dua-en">{notes.dua.transliteration}</p>
          </section>
        </FadeIn>

        <FadeIn delay={80}>
          <section>
            <p className="footer-note">{notes.walima}</p>
          </section>
        </FadeIn>
      </main>
    </div>
  );
}

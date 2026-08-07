import Image from "next/image";
import AudioPlayer from "./components/AudioPlayer";
import arenaPhoto from "@/public/photos/mongus-arena.jpeg";
import closePhoto from "@/public/photos/mongus-guitar-close.jpeg";
import purplePhoto from "@/public/photos/mongus-purple-stage.jpeg";
import lightsPhoto from "@/public/photos/mongus-stage-lights.jpeg";
import newHeroPhoto from "@/public/photos/hero-new.png";
import redPhoto from "@/public/photos/mongus-stage-red.jpeg";

const journal = [
  {
    number: "01",
    date: "PRÓXIMAMENTE",
    title: "La primera nota desde el estudio",
    text: "Ideas, ruido, noches largas y el camino detrás de la música.",
  },
  {
    number: "02",
    date: "ARCHIVO",
    title: "Fotografías de una ciudad encendida",
    text: "Una serie visual en movimiento. Sin poses, sin explicaciones.",
  },
  {
    number: "03",
    date: "EN PROCESO",
    title: "Canciones para después de medianoche",
    text: "Apuntes sobre las canciones que todavía no tienen nombre.",
  },
];

const appearances = [
  ["MUY PRONTO", "NUEVAS FECHAS", "MX"],
  ["—", "EN VIVO", "POR ANUNCIAR"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mongus, volver al inicio">
          MONGUS<span>®</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#musica">Música</a>
          <a href="#archivo">Archivo</a>
          <a href="#diario">Diario</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="menu-index" href="#archivo" aria-label="Ir al archivo">
          INDEX / 01
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo">
          <Image
            src={newHeroPhoto}
            alt="Mongus en vivo"
            fill
            preload
            placeholder="blur"
            sizes="100vw"
          />
        </div>
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">ARTISTA · GUITARRISTA · PRODUCTOR · CIUDAD DE MÉXICO</p>
          <h1>
            MON<span>GUS</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Canciones para los que todavía
              <br /> siguen despiertos.
            </p>
            <a className="circle-link" href="#musica" aria-label="Descubrir música">
              <span>DESCUBRE</span>
              <strong>↘</strong>
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">M</div>
        <div className="hero-stamp" aria-hidden="true">
          <span>MMXXVI</span>
          <span>VOL. 01</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>NUEVA ERA</span><i>✦</i><span>NUEVA MÚSICA</span><i>✦</i>
          <span>MUY PRONTO</span><i>✦</i><span>NUEVA ERA</span><i>✦</i>
          <span>NUEVA MÚSICA</span><i>✦</i><span>MUY PRONTO</span><i>✦</i>
        </div>
      </div>

      <section className="music section" id="musica">
        <div className="section-heading">
          <p className="kicker">01 / SONIDO</p>
          <h2>Lo que viene<br />se escucha <em>fuerte.</em></h2>
        </div>
        <div className="release-card">
          <div className="cover-art" aria-label="Arte provisional del próximo lanzamiento">
            <Image
              className="cover-photo"
              src={purplePhoto}
              alt="Mongus tocando guitarra en vivo"
              fill
              placeholder="blur"
              sizes="(max-width: 800px) 94vw, 43vw"
            />
            <span className="cover-top">MONGUS — 001</span>
            <span className="cover-letter">M</span>
            <span className="cover-bottom">NUEVOS ADELANTOS</span>
          </div>
          <div className="release-info">
            <p className="status"><span /> DISPONIBLES AHORA</p>
            <h3>ADELANTOS</h3>
            <p className="release-description">
              Escucha los primeros adelantos en exclusiva directamente desde el reproductor.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <AudioPlayer src="/musica/under-the-rain.mp3" title="UNDER THE RAIN" />
              <AudioPlayer src="/musica/BATTLE.mp3" title="BATTLE" />
            </div>
            <div className="platforms" aria-label="Plataformas próximamente">
              <span>SPOTIFY</span><span>APPLE MUSIC</span><span>YOUTUBE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="archive section" id="archivo">
        <div className="archive-intro">
          <p className="kicker">02 / ARCHIVO VISUAL</p>
          <p className="archive-note">Fragmentos de noches, escenarios<br />y todo lo que ocurre en medio.</p>
        </div>
        <div className="gallery">
          <figure className="gallery-item gallery-one">
            <div className="archive-photo">
              <Image src={redPhoto} alt="Mongus tocando guitarra sobre un escenario rojo" fill placeholder="blur" sizes="(max-width: 520px) 94vw, 35vw" />
              <span>01</span>
            </div>
            <figcaption><span>ESCENARIO / ARCHIVO</span><span>2026</span></figcaption>
          </figure>
          <figure className="gallery-item gallery-two">
            <div className="archive-photo">
              <Image src={closePhoto} alt="Mongus tocando guitarra en primer plano" fill placeholder="blur" sizes="(max-width: 520px) 94vw, 24vw" />
              <span>02</span>
            </div>
            <figcaption><span>BAJO LAS LUCES</span><span>ARCHIVO</span></figcaption>
          </figure>
          <figure className="gallery-item gallery-three">
            <div className="archive-photo">
              <Image src={arenaPhoto} alt="Mongus tocando guitarra frente al público" fill placeholder="blur" sizes="(max-width: 520px) 82vw, 29vw" />
              <span>03</span>
            </div>
            <figcaption><span>EN VIVO</span><span>ARCHIVO</span></figcaption>
          </figure>
        </div>
        <p className="gallery-callout">ESTO APENAS<br /><em>COMIENZA.</em></p>
      </section>

      <section className="journal section" id="diario">
        <div className="journal-title">
          <p className="kicker">03 / DIARIO</p>
          <h2>Notas desde<br />el otro lado.</h2>
        </div>
        <div className="journal-list">
          {journal.map((post) => (
            <article className="journal-row" key={post.number}>
              <span className="post-number">{post.number}</span>
              <div>
                <p className="post-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
              </div>
              <span className="post-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="live section" id="fechas">
        <div className="live-header">
          <p className="kicker">04 / EN VIVO</p>
          <h2>Nos vemos<br /><em>en la oscuridad.</em></h2>
        </div>
        <div className="dates">
          {appearances.map(([date, city, venue]) => (
            <div className="date-row" key={date + city}>
              <span>{date}</span><strong>{city}</strong><span>{venue}</span><i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <footer id="contacto">
        <div className="footer-top">
          <p className="kicker">SIGUE LA SEÑAL</p>
          <h2>MANTENTE<br /><em>CERCA.</em></h2>
          <a href="mailto:hola@mongus.mx">HOLA@MONGUS.MX <span>↗</span></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MONGUS</span>
          <div><a href="#top">INSTAGRAM</a><a href="#top">YOUTUBE</a><a href="#top">TIKTOK</a></div>
          <a href="#top">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </main>
  );
}

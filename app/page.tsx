import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import newHeroPhoto from "@/public/photos/hero-new.png";

export default function Home() {
  return (
    <main className="home-screen">
      <Header />

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
            <Link className="circle-link" href="/musica" aria-label="Ir a sección de música">
              <span>DESCUBRE</span>
              <strong>↘</strong>
            </Link>
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
          <span><Link href="/musica" style={{ textDecoration: "underline" }}>ESCUCHAR ADELANTOS</Link></span><i>✦</i>
          <span>NUEVA ERA</span><i>✦</i><span>NUEVA MÚSICA</span><i>✦</i>
          <span><Link href="/musica" style={{ textDecoration: "underline" }}>ESCUCHAR ADELANTOS</Link></span><i>✦</i>
        </div>
      </div>
    </main>
  );
}

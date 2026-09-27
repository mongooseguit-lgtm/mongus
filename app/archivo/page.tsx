import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import redPhoto from "@/public/photos/mongus-stage-red.jpeg";
import closePhoto from "@/public/photos/mongus-guitar-close.jpeg";
import arenaPhoto from "@/public/photos/mongus-arena.jpeg";

export const metadata = {
  title: "Archivo Visual — Mongus",
  description: "Fragmentos de noches, escenarios y todo lo que ocurre en medio.",
};

export default function ArchivoPage() {
  return (
    <main>
      <Header />

      <section className="archive section" id="archivo">
        <div className="archive-intro">
          <p className="kicker">02 / ARCHIVO VISUAL</p>
          <p className="archive-note">
            Fragmentos de noches, escenarios<br />y todo lo que ocurre en medio.
          </p>
        </div>
        <div className="gallery">
          <figure className="gallery-item gallery-one">
            <div className="archive-photo">
              <Image
                src={redPhoto}
                alt="Mongus tocando guitarra sobre un escenario rojo"
                fill
                placeholder="blur"
                sizes="(max-width: 520px) 94vw, 35vw"
              />
              <span>01</span>
            </div>
            <figcaption>
              <span>ESCENARIO / ARCHIVO</span>
              <span>2026</span>
            </figcaption>
          </figure>
          <figure className="gallery-item gallery-two">
            <div className="archive-photo">
              <Image
                src={closePhoto}
                alt="Mongus tocando guitarra en primer plano"
                fill
                placeholder="blur"
                sizes="(max-width: 520px) 94vw, 24vw"
              />
              <span>02</span>
            </div>
            <figcaption>
              <span>BAJO LAS LUCES</span>
              <span>ARCHIVO</span>
            </figcaption>
          </figure>
          <figure className="gallery-item gallery-three">
            <div className="archive-photo">
              <Image
                src={arenaPhoto}
                alt="Mongus tocando guitarra frente al público"
                fill
                placeholder="blur"
                sizes="(max-width: 520px) 82vw, 29vw"
              />
              <span>03</span>
            </div>
            <figcaption>
              <span>EN VIVO</span>
              <span>ARCHIVO</span>
            </figcaption>
          </figure>
        </div>
        <p className="gallery-callout">
          ESTO APENAS<br />
          <em>COMIENZA.</em>
        </p>
      </section>

      <Footer />
    </main>
  );
}

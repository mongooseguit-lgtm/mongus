import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AudioPlayer from "../components/AudioPlayer";
import purplePhoto from "@/public/photos/mongus-purple-stage.jpeg";

export const metadata = {
  title: "Música — Mongus",
  description: "Escucha los adelantos oficiales de Mongus.",
};

export default function MusicaPage() {
  return (
    <main>
      <Header />

      <section className="music section" id="musica">
        <div className="section-heading">
          <p className="kicker">01 / SONIDO</p>
          <h2>
            Lo que viene<br />
            se escucha <em>fuerte.</em>
          </h2>
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
              <AudioPlayer
                src="/musica/under-the-rain-m2.m4a"
                title="UNDER THE RAIN"
                trackNumber="01"
                subtitle="MASTER M2 · 4:51"
                thumbnail="/photos/thumb-under-the-rain.jpeg"
              />
              <AudioPlayer
                src="/musica/battle.m4a"
                title="BATTLE"
                trackNumber="02"
                subtitle="MASTER · 6:47"
                thumbnail="/photos/thumb-battle.jpeg"
              />
              <AudioPlayer
                src="/musica/i-know.m4a"
                title="I KNOW"
                trackNumber="03"
                subtitle="STUDIO DESK · 5:51"
                thumbnail="/photos/thumb-i-know.jpg"
              />
              <AudioPlayer
                src="/musica/under-the-rain-classic.mp3"
                title="UNDER THE RAIN"
                trackNumber="04"
                subtitle="ORIGINAL MIX · 4:46"
                thumbnail="/photos/thumb-under-the-rain-classic.jpg"
              />
            </div>
            <div className="platforms" aria-label="Plataformas próximamente">
              <span>SPOTIFY</span><span>APPLE MUSIC</span><span>YOUTUBE</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

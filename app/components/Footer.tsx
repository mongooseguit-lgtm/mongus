import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacto">
      <div className="footer-top">
        <p className="kicker">SIGUE LA SEÑAL</p>
        <h2>
          MANTENTE<br />
          <em>CERCA.</em>
        </h2>
        <a href="mailto:mongooseguit@gmail.com">
          mongooseguit@gmail.com <span>↗</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MONGUS</span>
        <div>
          <Link href="/">INICIO</Link>
          <Link href="/musica">MÚSICA</Link>
          <Link href="/archivo">ARCHIVO</Link>
          <Link href="/diario">DIARIO</Link>
        </div>
        <Link href="/">VOLVER AL INICIO ↑</Link>
      </div>
    </footer>
  );
}

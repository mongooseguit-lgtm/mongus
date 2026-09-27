import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Diario & En Vivo — Mongus",
  description: "Notas desde el estudio y próximas fechas en vivo.",
};

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

export default function DiarioPage() {
  return (
    <main>
      <Header />

      <section className="journal section" id="diario">
        <div className="journal-title">
          <p className="kicker">03 / DIARIO</p>
          <h2>
            Notas desde<br />
            el otro lado.
          </h2>
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
          <h2>
            Nos vemos<br />
            <em>en la oscuridad.</em>
          </h2>
        </div>
        <div className="dates">
          {appearances.map(([date, city, venue]) => (
            <div className="date-row" key={date + city}>
              <span>{date}</span>
              <strong>{city}</strong>
              <span>{venue}</span>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

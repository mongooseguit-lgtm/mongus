"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface JournalEntry {
  number: string;
  date: string;
  tag: string;
  title: string;
  lead: string;
  content: string[];
}

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    number: "01",
    date: "ENERO 2026",
    tag: "PRODUCCIÓN & ESTUDIO",
    title: "La primera nota desde el estudio: fricción y bulbo caliente",
    lead: "Ideas, ruido, noches largas y el camino analógico detrás de las nuevas canciones.",
    content: [
      "El proceso no comenzó con maquetas asépticas en un ordenador. Comenzó en una habitación con paredes de concreto crudo, un cabezal de bulbos al límite de su saturación y una guitarra afinada para responder al tacto más agresivo.",
      "Para estas grabaciones, la obsesión no fue la corrección de tono milimétrica, sino la vibración física: pastillas de baja salida que dejan respirar la madera, púas gruesas golpeando acero niquelado y micrófonos de cinta capturando el aire real que empuja el cono de 12 pulgadas.",
      "Las canciones que integran este primer volumen nacieron para tocarse sin red de protección. Cuando la señal viaja sin procesamientos cosméticos, el instrumento habla con sinceridad absoluta.",
    ],
  },
  {
    number: "02",
    date: "ARCHIVO EN GIRA",
    tag: "ESCENARIO & CARRETERA",
    title: "Fotografías de una ciudad encendida: entre soundchecks y arenas",
    lead: "Una serie visual en movimiento. Sin poses, sin artificios: la realidad antes de que suba el telón.",
    content: [
      "Pisar el escenario de un Auditorio Nacional o una arena en provincia horas antes del concierto es una experiencia litúrgica. El silencio cavernoso de miles de butacas vacías se rompe cuando enchufas el primer jack y dejas vibrar un acorde abierto.",
      "Ese eco gigante reverbera en las gradas y te recuerda la responsabilidad de lo que sucederá en unas horas. Esta colección de fotografías recopila esos momentos exactos: cables enrollados en la tarima, la prueba de afinadores en penumbra y la adrenalina previa al primer acorde.",
      "No hay filtros ni retoques: es la documentación pura de un guitarrista frente a la arquitectura de las salas más imponentes de México y Latinoamérica.",
    ],
  },
  {
    number: "03",
    date: "BITÁCORA NOCTURNA",
    tag: "COMPOSICIÓN",
    title: "Canciones para después de medianoche: el insomnio como brújula",
    lead: "Apuntes sobre los acordes que únicamente se descubren cuando el resto de la ciudad duerme.",
    content: [
      "Existe un rango de frecuencias que solo se aprecia entre las 2:00 AM y el amanecer. A esas horas, la percepción auditiva cambia: los armónicos agudos se sienten más punzantes y el sustain de una cuerda al aire parece extenderse en la habitación durante una eternidad.",
      "Canciones como 'Under The Rain' o 'Battle' surgieron de esas sesiones de vigilia, buscando melodías que funcionen como refugio para quienes aún están despiertos buscando respuestas o simplemente resistiendo el silencio.",
      "La guitarra eléctrica en este proyecto no es solo acompañamiento rítmico; es una voz solista que narra lo que las palabras a menudo no alcanzan a formular.",
    ],
  },
];

const APPEARANCES = [
  { date: "MUY PRONTO", city: "CIUDAD DE MÉXICO", venue: "POR CONFIRMAR", status: "PRÓXIMA ERA" },
  { date: "2026", city: "GUADALAJARA", venue: "FORO EN VIVO", status: "POR ANUNCIAR" },
  { date: "2026", city: "MONTERREY", venue: "CIRCUITO INDIE", status: "POR ANUNCIAR" },
];

export default function DiarioPage() {
  const [expandedId, setExpandedId] = useState<string | null>("01");
  const [ticketEmail, setTicketEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const toggleEntry = (number: string) => {
    setExpandedId(expandedId === number ? null : number);
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketEmail) return;
    setNotified(true);
  };

  return (
    <main className="diario-page">
      <Header />

      {/* Sección Diario */}
      <section className="journal section" id="diario">
        <div className="journal-title">
          <p className="kicker">03 / DIARIO DE ESTUDIO</p>
          <h2>
            Notas desde<br />
            el otro lado.
          </h2>
          <p className="journal-lead">
            Reflexiones, procesos analógicos, grabaciones y el camino detrás de cada acorde.
          </p>
        </div>

        <div className="journal-list">
          {JOURNAL_ENTRIES.map((entry) => {
            const isExpanded = expandedId === entry.number;

            return (
              <article
                className={`journal-row ${isExpanded ? "is-open" : ""}`}
                key={entry.number}
              >
                <div
                  className="journal-row-summary"
                  onClick={() => toggleEntry(entry.number)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleEntry(entry.number);
                    }
                  }}
                  aria-expanded={isExpanded}
                  aria-label={`Leer artículo: ${entry.title}`}
                >
                  <span className="post-number">{entry.number}</span>
                  <div className="post-headline-block">
                    <div className="post-tags">
                      <span className="post-date">{entry.date}</span>
                      <span className="post-category-tag">{entry.tag}</span>
                    </div>
                    <h3>{entry.title}</h3>
                    <p className="post-preview-text">{entry.lead}</p>
                  </div>
                  <span className="post-arrow" aria-hidden="true">
                    {isExpanded ? "↓" : "↗"}
                  </span>
                </div>

                {/* Contenido expandible del artículo */}
                {isExpanded && (
                  <div className="journal-body">
                    <div className="journal-divider-line" />
                    {entry.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="journal-paragraph">
                        {paragraph}
                      </p>
                    ))}
                    <div className="journal-entry-footer">
                      <span>TEXTO POR MONGUS · ARCHIVO DE CREACIÓN</span>
                      <button
                        type="button"
                        onClick={() => toggleEntry(entry.number)}
                        className="journal-collapse-btn"
                      >
                        REPLEGAR LECTURA ↑
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Sección Fechas En Vivo */}
      <section className="live section" id="fechas">
        <div className="live-header">
          <p className="kicker">04 / EN VIVO</p>
          <h2>
            Nos vemos<br />
            <em>en la oscuridad.</em>
          </h2>
        </div>

        <div className="dates">
          {APPEARANCES.map((app) => (
            <div className="date-row" key={app.city + app.date}>
              <span className="date-time">{app.date}</span>
              <strong>{app.city}</strong>
              <span className="date-venue">{app.venue}</span>
              <span className="date-status">{app.status}</span>
            </div>
          ))}
        </div>

        {/* Notificador de nuevas fechas */}
        <div className="live-notify-box">
          <div className="live-notify-content">
            <h4>SÉ EL PRIMERO EN ENTERARTE DE LAS FECHAS</h4>
            <p>Ingresa tu correo para recibir alertas directas cuando se liberen las entradas oficiales.</p>
          </div>
          {notified ? (
            <div className="notify-success">
              ✓ Estás registrado para la preventa exclusiva de fechas.
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="notify-form">
              <input
                type="email"
                required
                placeholder="tu-correo@ejemplo.com"
                value={ticketEmail}
                onChange={(e) => setTicketEmail(e.target.value)}
                aria-label="Correo electrónico para alertas de conciertos"
              />
              <button type="submit">AVÍSAME ↗</button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

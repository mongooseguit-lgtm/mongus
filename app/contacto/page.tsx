"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    motivo: "booking",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  // No backend: the message is handed to the visitor's mail app instead of pretending it was sent.
  const mailtoHref = `mailto:mongooseguit@gmail.com?subject=${encodeURIComponent(
    `[MONGUS CONTACTO: ${formData.motivo.toUpperCase()}] de ${formData.nombre}`
  )}&body=${encodeURIComponent(
    `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMotivo: ${formData.motivo}\n\nMensaje:\n${formData.mensaje}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    window.location.href = mailtoHref;
    setStatus("opened");
  };

  const handleReset = () => {
    setFormData({ nombre: "", email: "", motivo: "booking", mensaje: "" });
    setStatus("idle");
  };

  return (
    <main className="contacto-page">
      <Header />

      <section className="contacto-section section" id="contacto-main">
        <div className="section-heading">
          <p className="kicker">05 / CONTACTO &amp; BOOKING</p>
          <h2>
            Hablemos de música,<br />
            fechas y <em>proyectos.</em>
          </h2>
        </div>

        <div className="contacto-grid">
          {/* Formulario de contacto */}
          <div className="contacto-form-col">
            <h3 className="col-title">ENVÍA UN MENSAJE</h3>
            <p className="col-desc">
              Disponible para presentaciones en vivo, sesiones de estudio, prensa y consultas técnicas sobre guitarra y producción.
            </p>

            {status === "opened" ? (
              <div className="contacto-success-banner" role="alert">
                <div className="success-badge">✉ ÚLTIMO PASO</div>
                <h4>Tu mensaje está listo en tu app de correo, {formData.nombre}.</h4>
                <p>
                  Para que llegue, presiona <strong>Enviar</strong> en tu app de correo. Si no se abrió, usa el botón de abajo o escribe directamente a <code>mongooseguit@gmail.com</code>.
                </p>
                <div className="success-actions">
                  <a href={mailtoHref} className="mail-fallback-btn">
                    ABRIR EN TU APP DE CORREO ↗
                  </a>
                  <button type="button" onClick={handleReset} className="reset-btn">
                    ENVIAR OTRO MENSAJE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-group">
                  <label htmlFor="nombre">
                    NOMBRE COMPLETO <span className="req">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Ej. Andrés Ramos"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    CORREO ELECTRÓNICO <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="motivo">MOTIVO DE CONTACTO</label>
                  <select
                    id="motivo"
                    value={formData.motivo}
                    onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                  >
                    <option value="booking">Booking / Fechas en vivo</option>
                    <option value="prensa">Prensa &amp; Entrevistas</option>
                    <option value="produccion">Producción musical &amp; Sesiones</option>
                    <option value="guitar-lab">Guitar Lab &amp; Consultoría técnica</option>
                    <option value="general">Mensaje general</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">
                    MENSAJE <span className="req">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    maxLength={1500}
                    rows={5}
                    placeholder="Describe los detalles de la fecha, proyecto o consulta..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  />
                </div>

                <button type="submit" className="contacto-submit-btn">
                  ESCRIBIR CORREO ↗
                </button>
              </form>
            )}
          </div>

          {/* Información de booking y canales directos */}
          <div className="contacto-info-col">
            <div className="info-card">
              <span className="card-kicker">CANAL DIRECTO</span>
              <h4>BOOKING &amp; MANAGEMENT</h4>
              <p>Para contratación directa, riders técnicos y confirmación de fechas:</p>
              <a href="mailto:mongooseguit@gmail.com" className="direct-email-link">
                mongooseguit@gmail.com <span>↗</span>
              </a>
            </div>

            <div className="info-card">
              <span className="card-kicker">UBICACIÓN</span>
              <h4>CIUDAD DE MÉXICO</h4>
              <p>Base de operaciones, estudio y producción: CDMX, México.</p>
            </div>

            <div className="info-card">
              <span className="card-kicker">PRENSA &amp; MEDIOS</span>
              <h4>ELECTRONIC PRESS KIT (EPK)</h4>
              <p>
                Fotografías en alta resolución de escenario, logotipo en vectores, biografía oficial y hoja técnica de escenario.
              </p>
              <a
                href="mailto:mongooseguit@gmail.com?subject=Solicitud de Press Kit MONGUS"
                className="epk-request-btn"
              >
                SOLICITAR PRESS KIT ↗
              </a>
            </div>

            <div className="info-card networks-card">
              <span className="card-kicker">REDES &amp; TRANSMISIÓN</span>
              <h4>PLATAFORMAS</h4>
              <div className="network-pills">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="net-pill"
                >
                  SPOTIFY ↗
                </a>
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="net-pill"
                >
                  APPLE MUSIC ↗
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="net-pill"
                >
                  YOUTUBE ↗
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="net-pill"
                >
                  INSTAGRAM ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

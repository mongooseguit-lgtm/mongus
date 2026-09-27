"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RecursosPage() {
  const [activeTab, setActiveTab] = useState<"marcas" | "entorchado" | "materiales" | "afinacion">("marcas");

  return (
    <main className="recursos-page">
      <Header />

      <section className="section recursos-hero">
        <div className="section-heading">
          <p className="kicker">05 / GUITAR LAB & RECURSOS</p>
          <h2>
            La búsqueda del<br />
            <em>tono perfecto.</em>
          </h2>
        </div>

        <div className="recursos-intro">
          <div className="recursos-intro-badge">
            <span>GUÍA DE CUERDAS</span>
            <i>✦</i>
            <span>GUITAR LAB</span>
            <i>✦</i>
            <span>MONGUS TIPS</span>
          </div>
          <p className="recursos-intro-text">
            No existe una &ldquo;mejor&rdquo; cuerda universal. La elección ideal depende de tu ataque,
            la escala de tu guitarra, las afinaciones que uses y el carácter que buscas proyectar.
            Aquí tienes los fundamentos clave de la industria condensados para músicos exigentes.
          </p>
          <p className="recursos-sources">
            Fuentes especializadas: Producer Hive · Stringjoy · Peach Guitars · Optima Strings
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="recursos-nav" role="tablist" aria-label="Temas de la guía">
          <button
            className={`recursos-tab-btn ${activeTab === "marcas" ? "active" : ""}`}
            onClick={() => setActiveTab("marcas")}
            type="button"
            role="tab"
            aria-selected={activeTab === "marcas"}
          >
            <span>01</span> MARCAS DESTACADAS
          </button>
          <button
            className={`recursos-tab-btn ${activeTab === "entorchado" ? "active" : ""}`}
            onClick={() => setActiveTab("entorchado")}
            type="button"
            role="tab"
            aria-selected={activeTab === "entorchado"}
          >
            <span>02</span> ROUNDWOUND VS FLATWOUND
          </button>
          <button
            className={`recursos-tab-btn ${activeTab === "materiales" ? "active" : ""}`}
            onClick={() => setActiveTab("materiales")}
            type="button"
            role="tab"
            aria-selected={activeTab === "materiales"}
          >
            <span>03</span> MATERIALES Y ALEACIONES
          </button>
          <button
            className={`recursos-tab-btn ${activeTab === "afinacion" ? "active" : ""}`}
            onClick={() => setActiveTab("afinacion")}
            type="button"
            role="tab"
            aria-selected={activeTab === "afinacion"}
          >
            <span>04</span> DROP TUNING & TENSIÓN
          </button>
        </div>

        {/* Tab Content: Marcas */}
        {activeTab === "marcas" && (
          <div className="recursos-panel">
            <div className="recursos-grid">
              <div className="gear-card">
                <div className="gear-card-header">
                  <span className="gear-tag">ROCK CLÁSICO · BENDS</span>
                  <span className="gear-num">01</span>
                </div>
                <h3>ERNIE BALL (SLINKY)</h3>
                <p className="gear-desc">El estándar histórico del rock & roll mundial.</p>
                <ul className="gear-specs">
                  <li><strong>Tono:</strong> Icónico, balanceado y abierto.</li>
                  <li><strong>Tacto:</strong> Tensión ligera, ideal para bends elásticos sin esfuerzo.</li>
                  <li><strong>Uso:</strong> Máxima versatilidad para solos expresivos en estudio y vivo.</li>
                </ul>
              </div>

              <div className="gear-card">
                <div className="gear-card-header">
                  <span className="gear-tag">ALTA RESISTENCIA · MODERN</span>
                  <span className="gear-num">02</span>
                </div>
                <h3>D&apos;ADDARIO (SERIE NYXL)</h3>
                <p className="gear-desc">Ingeniería de alta tensión y aleación de carbono.</p>
                <ul className="gear-specs">
                  <li><strong>Tono:</strong> Mordaz, con mucha pegada (*punchy*) y rango medio articulado.</li>
                  <li><strong>Rendimiento:</strong> Extraordinaria estabilidad de afinación y resistencia anti-rotura.</li>
                  <li><strong>Uso:</strong> Músicos con ataque pesado o uso intenso de trémolo/whammy.</li>
                </ul>
              </div>

              <div className="gear-card">
                <div className="gear-card-header">
                  <span className="gear-tag">LUJO · ALEMANIA</span>
                  <span className="gear-num">03</span>
                </div>
                <h3>OPTIMA STRINGS</h3>
                <p className="gear-desc">Artesanía alemana de precisión con recubrimiento en Oro 24K.</p>
                <ul className="gear-specs">
                  <li><strong>Destacado:</strong> Bañadas en oro auténtico de 24 quilates.</li>
                  <li><strong>Durabilidad:</strong> Inmunidad prácticamente total a la corrosión por sudor.</li>
                  <li><strong>Uso:</strong> Calidad boutique y respuesta sonora cálida de larga vida.</li>
                </ul>
              </div>

              <div className="gear-card">
                <div className="gear-card-header">
                  <span className="gear-tag">CUSTOM BALANCED · BOUTIQUE</span>
                  <span className="gear-num">04</span>
                </div>
                <h3>STRINGJOY</h3>
                <p className="gear-desc">Sets con tensión matemáticamente balanceada cuerda por cuerda.</p>
                <ul className="gear-specs">
                  <li><strong>Tono:</strong> Claro, resonante y uniforme a lo largo del diapasón.</li>
                  <li><strong>Innovación:</strong> Elimina cuerdas flojas armando calibres personalizados.</li>
                  <li><strong>Uso:</strong> Afinaciones no convencionales y calibración precisa.</li>
                </ul>
              </div>

              <div className="gear-card full-width-card">
                <div className="gear-card-header">
                  <span className="gear-tag highlight">PRO TIP ANTI-ÓXIDO</span>
                  <span className="gear-num">05</span>
                </div>
                <h3>RECUBRIMIENTO (COATED STRINGS)</h3>
                <p className="gear-desc">
                  El sudor, la grasa de los dedos y la humedad desgastan y apagan las cuerdas rápidamente.
                  Marcas como <strong>Elixir (Nanoweb)</strong> o las series recubiertas de <strong>Stringjoy (Orbiters)</strong> aplican
                  una micro-película polimérica que sella el entorchado, multiplicando la vida útil por 3 sin perder el ataque.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Entorchado */}
        {activeTab === "entorchado" && (
          <div className="recursos-panel">
            <div className="comparison-banner">
              <h3>LA BATALLA DEL ENTORCHADO</h3>
              <p>El perfil del alambre exterior transforma por completo la textura, fricción y respuesta armónica.</p>
            </div>

            <div className="versus-grid">
              <div className="versus-card roundwound">
                <div className="versus-header">
                  <span className="versus-badge">ESTÁNDAR</span>
                  <h4>ROUNDWOUND</h4>
                  <p>Alambre cilíndrico redondo tradicional</p>
                </div>
                <div className="versus-body">
                  <div className="versus-point">
                    <span className="icon-plus">✦</span>
                    <div>
                      <strong>Ataque Brillante & Sustain:</strong>
                      <p>Mayor contenido armónico y el característico &ldquo;zing&rdquo; en agudos.</p>
                    </div>
                  </div>
                  <div className="versus-point">
                    <span className="icon-plus">✦</span>
                    <div>
                      <strong>Géneros Predilectos:</strong>
                      <p>Rock, Hard Rock, Metal, Pop contemporáneo y solos con distorsión.</p>
                    </div>
                  </div>
                  <div className="versus-point warning">
                    <span className="icon-minus">✕</span>
                    <div>
                      <strong>Ruido de fricción:</strong>
                      <p>Mayor ruido al deslizar dedos (*finger squeak*) y mayor fricción sobre los trastes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="versus-card flatwound">
                <div className="versus-header">
                  <span className="versus-badge alt">CINTA PLANA</span>
                  <h4>FLATWOUND</h4>
                  <p>Alambre de cinta pulida sin ranuras</p>
                </div>
                <div className="versus-body">
                  <div className="versus-point">
                    <span className="icon-plus">✦</span>
                    <div>
                      <strong>Tono Oscuro & Sedoso (*Mellow*):</strong>
                      <p>Fundamental redonda, graves controlados y atenuación de frecuencias chillantes.</p>
                    </div>
                  </div>
                  <div className="versus-point">
                    <span className="icon-plus">✦</span>
                    <div>
                      <strong>Géneros Predilectos:</strong>
                      <p>Jazz, R&B clásico, Soul, Motown y bajo eléctrico vintage.</p>
                    </div>
                  </div>
                  <div className="versus-point">
                    <span className="icon-plus">✦</span>
                    <div>
                      <strong>Tacto Suave:</strong>
                      <p>Deslizamiento 100% silencioso y mínimo desgaste en trastes y diapasón.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Materiales */}
        {activeTab === "materiales" && (
          <div className="recursos-panel">
            <div className="materials-grid">
              <div className="material-card">
                <div className="element-symbol">Ni</div>
                <span className="material-kicker">ALEACIÓN CLÁSICA 50s & 60s</span>
                <h3>PURE NICKEL</h3>
                <p className="material-subtitle">Níquel Puro al 100%</p>
                <p className="material-text">
                  El entorchado está hecho totalmente de níquel. Era la norma en la era dorada del blues y rock clásico antes de que la industria se volcara al acero.
                </p>
                <div className="spec-table">
                  <div className="spec-row">
                    <span>CARÁCTER:</span>
                    <strong>Cálido, vintage, medios suaves</strong>
                  </div>
                  <div className="spec-row">
                    <span>ATAQUE:</span>
                    <strong>Menos agresivo, compresión natural</strong>
                  </div>
                  <div className="spec-row">
                    <span>IDEAL PARA:</span>
                    <strong>Blues, Classic Rock, Jazz, amplificadores valvulares brillantes</strong>
                  </div>
                </div>
              </div>

              <div className="material-card">
                <div className="element-symbol alt">NPS</div>
                <span className="material-kicker">EL ESTÁNDAR MODERNO</span>
                <h3>NICKEL-PLATED STEEL</h3>
                <p className="material-subtitle">Acero Niquelado (~8% Ni / 92% Acero)</p>
                <p className="material-text">
                  Núcleo de acero con alambre exterior de acero recubierto con níquel. Es la cuerda más fabricada y vendida en el planeta hoy en día.
                </p>
                <div className="spec-table">
                  <div className="spec-row">
                    <span>CARÁCTER:</span>
                    <strong>Brillante, cortante, con pegada agresiva</strong>
                  </div>
                  <div className="spec-row">
                    <span>SALIDA:</span>
                    <strong>Mayor reactividad magnética (más señal a las pastillas)</strong>
                  </div>
                  <div className="spec-row">
                    <span>IDEAL PARA:</span>
                    <strong>Rock moderno, Metal, distorsiones pesadas y mezclas densas</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Drop Tuning */}
        {activeTab === "afinacion" && (
          <div className="recursos-panel">
            <div className="tuning-box">
              <div className="tuning-header">
                <span className="tuning-alert">DESMITIFICANDO EL DROP TUNING</span>
                <h3>¿SETS &ldquo;LIGHT TOP / HEAVY BOTTOM&rdquo;?</h3>
                <p>
                  Muchos guitarristas compran sets híbridos (ej. 10-52) pensando que una sexta cuerda más gruesa compensa
                  automáticamente la afinación en Drop D o Drop C. Los cálculos de tensión demuestran otra realidad.
                </p>
              </div>

              <div className="tuning-breakdown">
                <div className="breakdown-card math-problem">
                  <div className="breakdown-label">EL PROBLEMA MATEMÁTICO</div>
                  <h4>Tensión desbalanceada</h4>
                  <p>
                    Al bajar una cuerda completa (de Mi a Re, o Re a Do), la tensión cae dramáticamente en libras de presión.
                    En sets comerciales estándar, la cuerda afinada en Drop a menudo queda con <strong>significativamente menos tensión</strong> que las demás,
                    quedando blanda (*flubby*), trasteando y perdiendo afinación en ataques fuertes.
                  </p>
                </div>

                <div className="breakdown-card solution">
                  <div className="breakdown-label solution-label">LA SOLUCIÓN PROFESIONAL</div>
                  <h4>Sets calculados por tensión uniforme</h4>
                  <p>
                    La regla de oro para afinaciones bajas es armar o elegir calibres calculados por tensión uniforme
                    (manteniendo entre <strong>16 y 18 lbs de tensión por cuerda</strong> de forma balanceada).
                    Esto preserva el alma del mástil recto, elimina trasteos no deseados y proporciona la misma respuesta táctil bajo la púa en todas las cuerdas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

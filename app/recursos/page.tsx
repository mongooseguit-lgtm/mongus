"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RecursosPage() {
  const [activeTab, setActiveTab] = useState<"marcas" | "entorchado" | "materiales" | "afinacion">("marcas");

  return (
    <main className="recursos-page">
      {/* Header oficial del sitio */}
      <Header />

      <section className="recursos-section section" id="recursos">
        {/* Cabecera estilo Mongus */}
        <div className="section-heading">
          <p className="kicker">04 / GUITAR LAB &amp; RECURSOS</p>
          <h2>
            La búsqueda del<br />
            <em>tono perfecto.</em>
          </h2>
        </div>

        {/* Bloque de introducción */}
        <div className="recursos-intro">
          <p className="recursos-lead">
            No existe una &ldquo;mejor&rdquo; cuerda universal. La elección ideal depende totalmente de tu estilo de interpretación, el género musical que tocas y el tono que deseas alcanzar.
          </p>
          <p className="recursos-meta">
            FUENTES EXPERTAS: PRODUCER HIVE · STRINGJOY · PEACH GUITARS · OPTIMA STRINGS
          </p>
        </div>

        {/* Navegación interactiva de pestañas estilo Mongus */}
        <nav className="mongus-tabs" role="tablist" aria-label="Temas de la guía de cuerdas">
          <button
            type="button"
            className={`mongus-tab-btn ${activeTab === "marcas" ? "active" : ""}`}
            onClick={() => setActiveTab("marcas")}
            role="tab"
            aria-selected={activeTab === "marcas"}
          >
            <span className="tab-idx">01</span> MARCAS DESTACADAS
          </button>
          <button
            type="button"
            className={`mongus-tab-btn ${activeTab === "entorchado" ? "active" : ""}`}
            onClick={() => setActiveTab("entorchado")}
            role="tab"
            aria-selected={activeTab === "entorchado"}
          >
            <span className="tab-idx">02</span> ROUNDWOUND VS FLATWOUND
          </button>
          <button
            type="button"
            className={`mongus-tab-btn ${activeTab === "materiales" ? "active" : ""}`}
            onClick={() => setActiveTab("materiales")}
            role="tab"
            aria-selected={activeTab === "materiales"}
          >
            <span className="tab-idx">03</span> MATERIALES Y ALEACIONES
          </button>
          <button
            type="button"
            className={`mongus-tab-btn ${activeTab === "afinacion" ? "active" : ""}`}
            onClick={() => setActiveTab("afinacion")}
            role="tab"
            aria-selected={activeTab === "afinacion"}
          >
            <span className="tab-idx">04</span> DROP TUNING
          </button>
        </nav>

        {/* Pestaña 1: Marcas Destacadas */}
        <div id="marcas" className={`tab-content ${activeTab === "marcas" ? "active" : ""}`}>
          <div className="cards-grid">
            {/* Ernie Ball */}
            <div className="brand-card">
              <span className="card-tag">ROCK CLÁSICO · BENDS</span>
              <h3>Ernie Ball (Slinky)</h3>
              <p className="brand-desc">La opción clásica del Rock &amp; Roll.</p>
              <ul className="brand-specs">
                <li><strong>TONO:</strong> Icónico, balanceado.</li>
                <li><strong>TACTO:</strong> Tensión ligera, ideal para bends (estiramientos) sin esfuerzo.</li>
                <li><strong>USO:</strong> Versatilidad extrema, preferidas por principiantes y pros por igual.</li>
              </ul>
            </div>

            {/* D'Addario */}
            <div className="brand-card">
              <span className="card-tag">INGENIERÍA · ESTABILIDAD</span>
              <h3>D&apos;Addario (NYXL)</h3>
              <p className="brand-desc">Ingeniería moderna para mayor resistencia.</p>
              <ul className="brand-specs">
                <li><strong>TONO:</strong> Sonido audaz, con mucha pegada (punchy) y articulado.</li>
                <li><strong>RENDIMIENTO:</strong> Mayor estabilidad de afinación y fuerza superior contra roturas.</li>
                <li><strong>USO:</strong> Músicos que tocan con fuerza o usan trémolos constantemente.</li>
              </ul>
            </div>

            {/* Optima */}
            <div className="brand-card">
              <span className="card-tag">LUJO BOUTIQUE · 24K</span>
              <h3>Optima Strings</h3>
              <p className="brand-desc">Artesanía alemana y lujo.</p>
              <ul className="brand-specs">
                <li><strong>DESTACADO:</strong> Cuerdas recubiertas en Oro de 24K.</li>
                <li><strong>DURABILIDAD:</strong> Altamente resistentes al óxido y deslustre gracias al revestimiento premium.</li>
                <li><strong>USO:</strong> Músicos que buscan calidad boutique y larga vida útil.</li>
              </ul>
            </div>

            {/* Stringjoy */}
            <div className="brand-card">
              <span className="card-tag">TENSIÓN BALANCEADA</span>
              <h3>Stringjoy</h3>
              <p className="brand-desc">Sets personalizados y equilibrados.</p>
              <ul className="brand-specs">
                <li><strong>TONO:</strong> Claro, resonante y de larga duración (series Orbiters y Broadways).</li>
                <li><strong>INNOVACIÓN:</strong> Ofrecen tensión matemáticamente balanceada a través del diapasón.</li>
                <li><strong>USO:</strong> Afinaciones alternativas y músicos que buscan calibración precisa.</li>
              </ul>
            </div>

            {/* Elixir (Mención Especial) */}
            <div className="brand-card special-card">
              <span className="card-tag">MENCIÓN ESPECIAL · PREVENCIÓN DE ÓXIDO</span>
              <h3>Protección Anti-Corrosión &amp; Recubrimientos</h3>
              <p className="brand-desc">
                Las cuerdas tienden a deslustrarse y oxidarse por el sudor y los factores ambientales. Si buscas evitar esto y ahorrar a largo plazo, busca marcas conocidas por sus <strong>recubrimientos (coated strings)</strong> como Elixir o las <em>Orbiters</em> de Stringjoy, que protegen la cuerda prolongando su vida útil sin sacrificar el brillo original.
              </p>
            </div>
          </div>
        </div>

        {/* Pestaña 2: Roundwound vs Flatwound */}
        <div id="entorchado" className={`tab-content ${activeTab === "entorchado" ? "active" : ""}`}>
          <div className="battle-card">
            <div className="battle-header">
              <h3>La Batalla del Entorchado</h3>
              <p>La forma en que el alambre exterior envuelve al núcleo afecta drásticamente el sonido y el tacto de la guitarra.</p>
            </div>

            <div className="battle-columns">
              <div className="battle-box roundwound">
                <h4>Roundwound (Entorchado Redondo)</h4>
                <p>Tienen un núcleo de acero al carbono con un alambre cilíndrico envuelto apretadamente, formando pequeñas crestas.</p>
                <ul className="battle-list">
                  <li><span className="symbol-check">✓</span> <strong>SONIDO:</strong> Más sustain, brillo superior (top-end zing).</li>
                  <li><span className="symbol-check">✓</span> <strong>GÉNEROS:</strong> Rock, Metal, Pop, uso general.</li>
                  <li><span className="symbol-cross">✗</span> <strong>DESVENTAJA:</strong> Producen más ruido al deslizar los dedos y desgastan más rápido los trastes.</li>
                </ul>
              </div>

              <div className="battle-box flatwound">
                <h4>Flatwound (Entorchado Plano)</h4>
                <p>El alambre exterior es una cinta plana (ribbon wire), lo que deja una superficie completamente lisa.</p>
                <ul className="battle-list">
                  <li><span className="symbol-check">✓</span> <strong>SONIDO:</strong> Muy cálido, oscuro, &ldquo;mellow&rdquo; y limpio.</li>
                  <li><span className="symbol-check">✓</span> <strong>GÉNEROS:</strong> Jazz, R&amp;B, Black Gospel, Rock clásico en bajos.</li>
                  <li><span className="symbol-check">✓</span> <strong>VENTAJA:</strong> Casi nulo ruido de dedos; prolongan la vida de los trastes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pestaña 3: Materiales y Aleaciones */}
        <div id="materiales" className={`tab-content ${activeTab === "materiales" ? "active" : ""}`}>
          <div className="materials-grid">
            {/* Pure Nickel */}
            <div className="material-card">
              <div className="material-symbol ni">Ni</div>
              <h3>Pure Nickel</h3>
              <p className="material-sub acid">NÍQUEL PURO</p>
              <p className="material-desc">
                El alambre envolvente está hecho enteramente de níquel. Eran el estándar en los años 50 y 60.
              </p>
              <ul className="material-specs">
                <li>🎸 <strong>TONO:</strong> &ldquo;Mojo&rdquo; vintage, cálido, profundo.</li>
                <li>🎵 <strong>ESTILOS:</strong> Blues, Jazz, Classic Rock.</li>
                <li>📉 <strong>ATAQUE:</strong> Más suave, con menos volumen general y presencia aguda.</li>
              </ul>
            </div>

            {/* Nickel Wound */}
            <div className="material-card">
              <div className="material-symbol nps">NPS</div>
              <h3>Nickel Wound</h3>
              <p className="material-sub blue">ACERO NIQUELADO (NICKEL-PLATED STEEL)</p>
              <p className="material-desc">
                El alambre está compuesto por un ~8% de níquel y un ~92% de acero. Es el estándar moderno de la industria.
              </p>
              <ul className="material-specs">
                <li>🎸 <strong>TONO:</strong> Brillante, mordaz, corta bien en la mezcla.</li>
                <li>🎵 <strong>ESTILOS:</strong> Rock moderno, Metal, Pop, Country.</li>
                <li>📈 <strong>ATAQUE:</strong> Rápido, con gran presencia y mayor reactividad magnética (más salida en las pastillas).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pestaña 4: Drop Tuning */}
        <div id="afinacion" className={`tab-content ${activeTab === "afinacion" ? "active" : ""}`}>
          <div className="tuning-container">
            <h3 className="tuning-title">El Mito del Drop Tuning</h3>
            <p className="tuning-subtitle">¿SETS &ldquo;LIGHT TOP, HEAVY BOTTOM&rdquo; (AGUDOS LIGEROS, GRAVES PESADOS)?</p>

            <p className="tuning-intro">
              Históricamente, los guitarristas han utilizado calibres híbridos (ej. 10-52) para afinaciones como Drop D o Drop C, creyendo que las cuerdas graves más gruesas compensarían la pérdida de tensión al afinar más grave.
            </p>

            <div className="tuning-grid">
              <div className="tuning-box problem">
                <div className="tuning-badge red">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>El Problema Matemático</span>
                </div>
                <p>
                  Según los expertos de <em>Stringjoy</em>, las matemáticas no cuadran. Al bajar la afinación de la sexta cuerda (de E a D), la tensión cae drásticamente. Incluso usando un juego de &ldquo;graves pesados&rdquo;, la cuerda afinada en Drop D a menudo queda con <strong>menos tensión</strong> que el resto de las cuerdas, sintiéndose floja y desequilibrada (flubby).
                </p>
              </div>

              <div className="tuning-box solution">
                <div className="tuning-badge acid">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>La Solución Profesional</span>
                </div>
                <p>
                  Para afinaciones bajas (Drop Tuning), la recomendación profesional es utilizar <strong>Sets Custom (Personalizados)</strong>. Utilizar calculadoras de tensión te permite armar un set donde cada cuerda mantenga una tensión uniforme (ej. entre 16 y 18 lbs por cuerda) independientemente de a qué nota esté afinada, logrando así un mástil estable y una ejecución perfecta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de fuentes */}
        <div className="guide-source-footer">
          Generado en base a las fuentes proporcionadas del cuaderno del usuario · Guitar Lab Mongus
        </div>
      </section>

      {/* Footer oficial de Mongus */}
      <Footer />
    </main>
  );
}

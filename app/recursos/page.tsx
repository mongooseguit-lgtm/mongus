"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type TabKey = "marcas" | "entorchado" | "materiales" | "afinacion" | "calculadora";

export default function RecursosPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("marcas");

  // Calculator State
  const [scaleLength, setScaleLength] = useState<"25.5" | "24.75" | "25.0">("25.5");
  const [tuning, setTuning] = useState<"standard-e" | "drop-d" | "eb-standard" | "d-standard" | "drop-c">("standard-e");
  const [feelPreference, setFeelPreference] = useState<"light" | "balanced" | "heavy">("balanced");

  // Recommendation engine based on physical acoustic principles
  const getRecommendation = () => {
    // Return recommended gauges and approximate tensions
    if (tuning === "standard-e") {
      if (feelPreference === "light") {
        return {
          setName: "Super Light 09-42",
          strings: [
            { note: "E4 (1ª)", gauge: ".009", tension: scaleLength === "25.5" ? "13.1 lbs" : "12.3 lbs" },
            { note: "B3 (2ª)", gauge: ".011", tension: scaleLength === "25.5" ? "11.0 lbs" : "10.3 lbs" },
            { note: "G3 (3ª)", gauge: ".016", tension: scaleLength === "25.5" ? "14.7 lbs" : "13.8 lbs" },
            { note: "D3 (4ª)", gauge: ".024", tension: scaleLength === "25.5" ? "15.8 lbs" : "14.8 lbs" },
            { note: "A2 (5ª)", gauge: ".032", tension: scaleLength === "25.5" ? "15.8 lbs" : "14.8 lbs" },
            { note: "E2 (6ª)", gauge: ".042", tension: scaleLength === "25.5" ? "14.8 lbs" : "13.9 lbs" },
          ],
          totalTension: scaleLength === "25.5" ? "85.2 lbs" : "79.9 lbs",
          diagnosis: "Ideal para solos rápidos y estiramientos continuos. En guitarras escala corta (24.75) puede sentirse un poco esponjosa.",
          suggestedSet: "Ernie Ball Super Slinky (09-42) o D'Addario NYXL 0942",
        };
      }
      if (feelPreference === "heavy") {
        return {
          setName: "Medium Heavy 11-49",
          strings: [
            { note: "E4 (1ª)", gauge: ".011", tension: scaleLength === "25.5" ? "19.6 lbs" : "18.4 lbs" },
            { note: "B3 (2ª)", gauge: ".014", tension: scaleLength === "25.5" ? "17.8 lbs" : "16.7 lbs" },
            { note: "G3 (3ª)", gauge: ".018", tension: scaleLength === "25.5" ? "18.6 lbs" : "17.4 lbs" },
            { note: "D3 (4ª)", gauge: ".028", tension: scaleLength === "25.5" ? "21.3 lbs" : "20.0 lbs" },
            { note: "A2 (5ª)", gauge: ".038", tension: scaleLength === "25.5" ? "21.6 lbs" : "20.2 lbs" },
            { note: "E2 (6ª)", gauge: ".049", tension: scaleLength === "25.5" ? "19.5 lbs" : "18.3 lbs" },
          ],
          totalTension: scaleLength === "25.5" ? "118.4 lbs" : "111.0 lbs",
          diagnosis: "Tono grueso, proyección masiva y sustain prolongado. Requiere fuerza en la mano izquierda para bends de tono completo.",
          suggestedSet: "Ernie Ball Power Slinky (11-48) o Stringjoy Broadway 11-50",
        };
      }
      // Balanced 10-46
      return {
        setName: "Regular Standard 10-46",
        strings: [
          { note: "E4 (1ª)", gauge: ".010", tension: scaleLength === "25.5" ? "16.2 lbs" : "15.2 lbs" },
          { note: "B3 (2ª)", gauge: ".013", tension: scaleLength === "25.5" ? "15.4 lbs" : "14.4 lbs" },
          { note: "G3 (3ª)", gauge: ".017", tension: scaleLength === "25.5" ? "16.6 lbs" : "15.6 lbs" },
          { note: "D3 (4ª)", gauge: ".026", tension: scaleLength === "25.5" ? "18.4 lbs" : "17.2 lbs" },
          { note: "A2 (5ª)", gauge: ".036", tension: scaleLength === "25.5" ? "19.5 lbs" : "18.3 lbs" },
          { note: "E2 (6ª)", gauge: ".046", tension: scaleLength === "25.5" ? "17.5 lbs" : "16.4 lbs" },
        ],
        totalTension: scaleLength === "25.5" ? "103.6 lbs" : "97.1 lbs",
        diagnosis: "El estándar dorado de la industria. Tensión equilibrada entre 15 y 19 lbs por cuerda para cualquier estilo de rock o pop.",
        suggestedSet: "Ernie Ball Regular Slinky (10-46) o D'Addario EXL110",
      };
    }

    if (tuning === "drop-d") {
      return {
        setName: feelPreference === "light" ? "Drop D Light Custom 09-46" : "Drop D Balanced 10-52 (Skinny Top Heavy Bottom)",
        strings: [
          { note: "E4 (1ª)", gauge: feelPreference === "light" ? ".009" : ".010", tension: feelPreference === "light" ? "13.1 lbs" : "16.2 lbs" },
          { note: "B3 (2ª)", gauge: feelPreference === "light" ? ".011" : ".013", tension: feelPreference === "light" ? "11.0 lbs" : "15.4 lbs" },
          { note: "G3 (3ª)", gauge: feelPreference === "light" ? ".016" : ".017", tension: feelPreference === "light" ? "14.7 lbs" : "16.6 lbs" },
          { note: "D3 (4ª)", gauge: feelPreference === "light" ? ".026" : ".030", tension: feelPreference === "light" ? "18.4 lbs" : "20.1 lbs" },
          { note: "A2 (5ª)", gauge: feelPreference === "light" ? ".036" : ".042", tension: feelPreference === "light" ? "19.5 lbs" : "20.8 lbs" },
          { note: "D2 (6ª)", gauge: feelPreference === "light" ? ".048" : ".052", tension: feelPreference === "light" ? "15.2 lbs" : "17.6 lbs" },
        ],
        totalTension: feelPreference === "light" ? "91.9 lbs" : "106.7 lbs",
        diagnosis: "Al bajar la 6ª a D, un calibre .046 caería a ~13.8 lbs (muy flojo). Con .052 se recuperan las 17.6 lbs exactas para que el acorde de potencia (power chord) suene nítido y sin trasteos.",
        suggestedSet: "Ernie Ball Skinny Top Heavy Bottom (10-52) o Stringjoy Custom Drop 10-52",
      };
    }

    if (tuning === "eb-standard") {
      return {
        setName: "Eb Compensated 10.5-48 o 11-48",
        strings: [
          { note: "Eb4 (1ª)", gauge: ".0105", tension: "15.9 lbs" },
          { note: "Bb3 (2ª)", gauge: ".0135", tension: "15.2 lbs" },
          { note: "Gb3 (3ª)", gauge: ".0175", tension: "16.2 lbs" },
          { note: "Db3 (4ª)", gauge: ".026", tension: "17.1 lbs" },
          { note: "Ab2 (5ª)", gauge: ".038", tension: "18.5 lbs" },
          { note: "Eb2 (6ª)", gauge: ".048", tension: "16.8 lbs" },
        ],
        totalTension: "99.7 lbs",
        diagnosis: "Afinar medio tono abajo resta aproximadamente 8% de tensión. Un set de medio calibre (10.5 o 11) recupera el tacto de un 10-46 en Standard.",
        suggestedSet: "Stringjoy Orbiters Balanced 10.5-48 o D'Addario NYXL 1149",
      };
    }

    if (tuning === "d-standard") {
      return {
        setName: "D Standard Heavy Core 11-54",
        strings: [
          { note: "D4 (1ª)", gauge: ".011", tension: "15.5 lbs" },
          { note: "A3 (2ª)", gauge: ".015", tension: "15.9 lbs" },
          { note: "F3 (3ª)", gauge: ".019", tension: "16.4 lbs" },
          { note: "C3 (4ª)", gauge: ".030", tension: "18.6 lbs" },
          { note: "G2 (5ª)", gauge: ".042", tension: "18.9 lbs" },
          { note: "D2 (6ª)", gauge: ".054", tension: "17.4 lbs" },
        ],
        totalTension: "102.7 lbs",
        diagnosis: "Afinación un tono completo abajo. Requiere un set 11-54 para mantener estabilidad y evitar calibraciones extremas del alma del mástil.",
        suggestedSet: "Ernie Ball Beefy Slinky (11-54) o Dunlop Heavy Core 11-50",
      };
    }

    // Drop C
    return {
      setName: "Drop C Optimized 11-56",
      strings: [
        { note: "D4 (1ª)", gauge: ".011", tension: "15.5 lbs" },
        { note: "A3 (2ª)", gauge: ".015", tension: "15.9 lbs" },
        { note: "F3 (3ª)", gauge: ".019", tension: "16.4 lbs" },
        { note: "C3 (4ª)", gauge: ".030", tension: "18.6 lbs" },
        { note: "G2 (5ª)", gauge: ".042", tension: "18.9 lbs" },
        { note: "C2 (6ª)", gauge: ".056", tension: "16.2 lbs" },
      ],
      totalTension: "101.5 lbs",
      diagnosis: "La 6ª afinada en C (2 tonos abajo) requiere calibre .056 mínimo para no vibrar descontrolada contra los trastes. Las primeras cuerdas en D se benefician de .011.",
      suggestedSet: "Ernie Ball Not Even Slinky (12-56) o Stringjoy Custom Drop C (11-56)",
    };
  };

  const rec = getRecommendation();

  return (
    <main className="recursos-page">
      <Header />

      <section className="recursos-section section" id="recursos">
        <div className="section-heading">
          <p className="kicker">04 / GUITAR LAB &amp; RECURSOS</p>
          <h2>
            La búsqueda del<br />
            <em>tono perfecto.</em>
          </h2>
        </div>

        <div className="recursos-intro">
          <p className="recursos-lead">
            No existe una &ldquo;mejor&rdquo; cuerda universal. La elección ideal depende totalmente de tu estilo de interpretación, el género musical que tocas y el tono que deseas alcanzar.
          </p>
          <p className="recursos-meta">
            FUENTES EXPERTAS: PRODUCER HIVE · STRINGJOY · PEACH GUITARS · OPTIMA STRINGS
          </p>
        </div>

        {/* Navegación interactiva de pestañas */}
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
          <button
            type="button"
            className={`mongus-tab-btn tab-calc ${activeTab === "calculadora" ? "active" : ""}`}
            onClick={() => setActiveTab("calculadora")}
            role="tab"
            aria-selected={activeTab === "calculadora"}
          >
            <span className="tab-idx">05</span> ⚡ CALCULADORA DE TENSIÓN
          </button>
        </nav>

        {/* Pestaña 1: Marcas Destacadas */}
        <div id="marcas" className={`tab-content ${activeTab === "marcas" ? "active" : ""}`}>
          <div className="cards-grid">
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

        {/* Pestaña 5: Calculadora Interactiva de Tensión & Calibre */}
        <div id="calculadora" className={`tab-content ${activeTab === "calculadora" ? "active" : ""}`}>
          <div className="calc-card">
            <div className="calc-header">
              <span className="calc-tag">HERRAMIENTA TÉCNICA · GUITAR LAB</span>
              <h3>Calculadora &amp; Recomendador de Calibres</h3>
              <p>
                Calcula la combinación física ideal de calibres según la escala de tu guitarra, afinación y tacto deseado para lograr tensión uniforme sin trasteos.
              </p>
            </div>

            {/* Selectores de configuración */}
            <div className="calc-controls-row">
              <div className="calc-field">
                <label htmlFor="scale-select">1. ESCALA DE LA GUITARRA</label>
                <select
                  id="scale-select"
                  value={scaleLength}
                  onChange={(e) => setScaleLength(e.target.value as "25.5" | "24.75" | "25.0")}
                >
                  <option value="25.5">25.5&quot; — Fender Strat / Tele / Superstrats</option>
                  <option value="24.75">24.75&quot; — Gibson Les Paul / SG / ES</option>
                  <option value="25.0">25.0&quot; — PRS / Híbridas</option>
                </select>
              </div>

              <div className="calc-field">
                <label htmlFor="tuning-select">2. AFINACIÓN OBJETIVO</label>
                <select
                  id="tuning-select"
                  value={tuning}
                  onChange={(e) => setTuning(e.target.value as "standard-e" | "drop-d" | "eb-standard" | "d-standard" | "drop-c")}
                >
                  <option value="standard-e">Standard E (E A D G B E)</option>
                  <option value="drop-d">Drop D (D A D G B E)</option>
                  <option value="eb-standard">Eb Standard (-1/2 tono)</option>
                  <option value="d-standard">D Standard (-1 tono completo)</option>
                  <option value="drop-c">Drop C (C G C F A D)</option>
                </select>
              </div>

              <div className="calc-field">
                <label htmlFor="feel-select">3. TACTO PREFERIDO</label>
                <select
                  id="feel-select"
                  value={feelPreference}
                  onChange={(e) => setFeelPreference(e.target.value as "light" | "balanced" | "heavy")}
                >
                  <option value="balanced">Equilibrado (Ideal ~16-18 lbs / cuerda)</option>
                  <option value="light">Ligero / Bends elásticos (~12-15 lbs)</option>
                  <option value="heavy">Firme / Pegada pesada (~19-22 lbs)</option>
                </select>
              </div>
            </div>

            {/* Resultados y Calibres calculados */}
            <div className="calc-results-block">
              <div className="calc-summary-bar">
                <div className="summary-col">
                  <span className="summary-label">SET RECOMENDADO</span>
                  <strong>{rec.setName}</strong>
                </div>
                <div className="summary-col">
                  <span className="summary-label">TENSIÓN TOTAL EN EL MÁSTIL</span>
                  <strong className="tension-highlight">{rec.totalTension}</strong>
                </div>
                <div className="summary-col">
                  <span className="summary-label">SET COMERCIAL RECOMENDADO</span>
                  <span>{rec.suggestedSet}</span>
                </div>
              </div>

              {/* Grid de cuerdas individual */}
              <div className="string-gauge-grid">
                {rec.strings.map((str, idx) => (
                  <div key={idx} className="string-box">
                    <span className="string-idx">{idx + 1}ª CUERDA</span>
                    <span className="string-note">{str.note}</span>
                    <strong className="string-gauge">{str.gauge}</strong>
                    <span className="string-tension">{str.tension}</span>
                  </div>
                ))}
              </div>

              {/* Diagnóstico técnico */}
              <div className="calc-diagnosis">
                <div className="diag-badge">ANÁLISIS FÍSICO</div>
                <p>{rec.diagnosis}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="guide-source-footer">
          Generado en base a las fuentes del Guitar Lab Mongus · Cálculos basados en masa unitaria de acero niquelado
        </div>
      </section>

      <Footer />
    </main>
  );
}

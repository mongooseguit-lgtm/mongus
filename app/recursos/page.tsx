"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RecursosPage() {
  const [activeTab, setActiveTab] = useState<"marcas" | "entorchado" | "materiales" | "afinacion">("marcas");

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50 antialiased font-sans">
      <style>{`
        .tab-btn.active {
          border-bottom: 2px solid #fbbf24;
          color: #fbbf24;
          font-weight: 600;
        }
        .tab-content {
          display: none;
          animation: fadeIn 0.3s ease-in-out;
        }
        .tab-content.active {
          display: block;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Main site header navigation */}
      <Header />

      {/* Guitar Guide Header */}
      <header className="bg-slate-800 shadow-md border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            La Búsqueda del Tono Perfecto
          </h1>
          <p className="text-center text-slate-400 mt-2 text-sm md:text-base">
            Basado en fuentes expertas: Producer Hive, Stringjoy, Peach Guitars, Optima y más.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
        <section className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-slate-200">
            No existe una &ldquo;mejor&rdquo; cuerda universal
          </h2>
          <p className="text-slate-400 leading-relaxed">
            La elección de la cuerda ideal depende completamente de tu estilo de interpretación, el género musical que tocas y el tono que deseas alcanzar. A continuación, explora las diferencias fundamentales extraídas de los expertos de la industria.
          </p>
        </section>

        {/* Tab Buttons */}
        <nav className="flex flex-wrap justify-center mb-8 border-b border-slate-700" aria-label="Pestañas de la guía">
          <button
            type="button"
            className={`tab-btn px-4 py-3 text-slate-400 hover:text-amber-300 transition-colors focus:outline-none ${
              activeTab === "marcas" ? "active" : ""
            }`}
            onClick={() => setActiveTab("marcas")}
          >
            Marcas Destacadas
          </button>
          <button
            type="button"
            className={`tab-btn px-4 py-3 text-slate-400 hover:text-amber-300 transition-colors focus:outline-none ${
              activeTab === "entorchado" ? "active" : ""
            }`}
            onClick={() => setActiveTab("entorchado")}
          >
            Roundwound vs Flatwound
          </button>
          <button
            type="button"
            className={`tab-btn px-4 py-3 text-slate-400 hover:text-amber-300 transition-colors focus:outline-none ${
              activeTab === "materiales" ? "active" : ""
            }`}
            onClick={() => setActiveTab("materiales")}
          >
            Materiales y Aleaciones
          </button>
          <button
            type="button"
            className={`tab-btn px-4 py-3 text-slate-400 hover:text-amber-300 transition-colors focus:outline-none ${
              activeTab === "afinacion" ? "active" : ""
            }`}
            onClick={() => setActiveTab("afinacion")}
          >
            Drop Tuning
          </button>
        </nav>

        {/* Tab: Marcas */}
        <div id="marcas" className={`tab-content ${activeTab === "marcas" ? "active" : ""}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ernie Ball */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg hover:border-amber-500/50 transition-colors">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Ernie Ball (Slinky)</h3>
              <p className="text-slate-300 text-sm mb-4">La opción clásica del Rock &amp; Roll.</p>
              <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
                <li><strong>Tono:</strong> Icónico, balanceado.</li>
                <li><strong>Tacto:</strong> Tensión ligera, ideal para bends (estiramientos) sin esfuerzo.</li>
                <li><strong>Uso:</strong> Versatilidad extrema, preferidas por principiantes y pros por igual.</li>
              </ul>
            </div>

            {/* D'Addario */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg hover:border-amber-500/50 transition-colors">
              <h3 className="text-xl font-bold text-amber-400 mb-2">D&apos;Addario (Serie NYXL)</h3>
              <p className="text-slate-300 text-sm mb-4">Ingeniería moderna para mayor resistencia.</p>
              <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
                <li><strong>Tono:</strong> Sonido audaz, con mucha pegada (punchy) y articulado.</li>
                <li><strong>Rendimiento:</strong> Mayor estabilidad de afinación y fuerza superior contra roturas.</li>
                <li><strong>Uso:</strong> Músicos que tocan con fuerza o usan trémolos constantemente.</li>
              </ul>
            </div>

            {/* Optima */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg hover:border-amber-500/50 transition-colors">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Optima Strings</h3>
              <p className="text-slate-300 text-sm mb-4">Artesanía alemana y lujo.</p>
              <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
                <li><strong>Destacado:</strong> Cuerdas recubiertas en Oro de 24K.</li>
                <li><strong>Durabilidad:</strong> Altamente resistentes al óxido y deslustre gracias al revestimiento premium.</li>
                <li><strong>Uso:</strong> Músicos que buscan calidad boutique y larga vida útil.</li>
              </ul>
            </div>

            {/* Stringjoy */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg hover:border-amber-500/50 transition-colors">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Stringjoy</h3>
              <p className="text-slate-300 text-sm mb-4">Sets personalizados y equilibrados.</p>
              <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
                <li><strong>Tono:</strong> Claro, resonante y de larga duración (series Orbiters y Broadways).</li>
                <li><strong>Innovación:</strong> Ofrecen tensión matemáticamente balanceada a través del diapasón.</li>
                <li><strong>Uso:</strong> Afinaciones alternativas y músicos que buscan calibración precisa.</li>
              </ul>
            </div>

            {/* Elixir (Mención) */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg hover:border-amber-500/50 transition-colors lg:col-span-2">
              <h3 className="text-xl font-bold text-amber-400 mb-2">Mención Especial: Prevención de Óxido</h3>
              <p className="text-slate-300 text-sm">
                Las cuerdas tienden a deslustrarse y oxidarse por el sudor y los factores ambientales. Si buscas evitar esto y ahorrar a largo plazo, busca marcas conocidas por sus <strong>recubrimientos (coated strings)</strong> como Elixir o las <em>Orbiters</em> de Stringjoy, que protegen la cuerda prolongando su vida útil sin sacrificar demasiado el brillo original.
              </p>
            </div>
          </div>
        </div>

        {/* Tab: Entorchado */}
        <div id="entorchado" className={`tab-content ${activeTab === "entorchado" ? "active" : ""}`}>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg mb-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 text-center">La Batalla del Entorchado</h3>
            <p className="text-slate-300 text-center mb-8">La forma en que el alambre exterior envuelve al núcleo afecta drásticamente el sonido y el tacto de la guitarra.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-amber-500">
                <h4 className="text-lg font-bold text-slate-100 mb-2">Roundwound (Entorchado Redondo)</h4>
                <p className="text-slate-400 text-sm mb-3">Tienen un núcleo de acero al carbono con un alambre cilíndrico envuelto apretadamente, formando pequeñas crestas.</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li><span className="text-green-400 font-bold">✓</span> <strong>Sonido:</strong> Más sustain, brillo superior (top-end zing).</li>
                  <li><span className="text-green-400 font-bold">✓</span> <strong>Géneros:</strong> Rock, Metal, Pop, uso general.</li>
                  <li><span className="text-red-400 font-bold">✗</span> <strong>Desventaja:</strong> Producen más ruido al deslizar los dedos y desgastan más rápido los trastes.</li>
                </ul>
              </div>

              <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-slate-100 mb-2">Flatwound (Entorchado Plano)</h4>
                <p className="text-slate-400 text-sm mb-3">El alambre exterior es una cinta plana (ribbon wire), lo que deja una superficie completamente lisa.</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li><span className="text-green-400 font-bold">✓</span> <strong>Sonido:</strong> Muy cálido, oscuro, &ldquo;mellow&rdquo; y limpio.</li>
                  <li><span className="text-green-400 font-bold">✓</span> <strong>Géneros:</strong> Jazz, R&amp;B, Black Gospel, Rock clásico en bajos.</li>
                  <li><span className="text-green-400 font-bold">✓</span> <strong>Ventaja:</strong> Casi nulo ruido de dedos; prolongan la vida de los trastes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tab: Materiales */}
        <div id="materiales" className={`tab-content ${activeTab === "materiales" ? "active" : ""}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center mb-4 border-2 border-amber-400">
                <span className="text-2xl font-bold text-amber-400">Ni</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Pure Nickel</h3>
              <p className="text-amber-400 text-sm mb-4 font-semibold">Níquel Puro</p>
              <p className="text-slate-400 text-sm leading-relaxed text-left mb-4">
                El alambre envolvente está hecho enteramente de níquel. Eran el estándar en los años 50 y 60.
              </p>
              <ul className="text-sm text-slate-300 space-y-2 text-left bg-slate-900 p-4 rounded">
                <li>🎸 <strong>Tono:</strong> &ldquo;Mojo&rdquo; vintage, cálido, profundo.</li>
                <li>🎵 <strong>Estilos:</strong> Blues, Jazz, Classic Rock.</li>
                <li>📉 <strong>Ataque:</strong> Más suave, con menos volumen general y presencia aguda.</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center mb-4 border-2 border-blue-400">
                <span className="text-2xl font-bold text-blue-400">NPS</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Nickel Wound</h3>
              <p className="text-blue-400 text-sm mb-4 font-semibold">Acero Niquelado (Nickel-Plated Steel)</p>
              <p className="text-slate-400 text-sm leading-relaxed text-left mb-4">
                El alambre está compuesto por un ~8% de níquel y un ~92% de acero. Es el estándar moderno.
              </p>
              <ul className="text-sm text-slate-300 space-y-2 text-left bg-slate-900 p-4 rounded">
                <li>🎸 <strong>Tono:</strong> Brillante, mordaz, corta bien en la mezcla.</li>
                <li>🎵 <strong>Estilos:</strong> Rock moderno, Metal, Pop, Country.</li>
                <li>📈 <strong>Ataque:</strong> Rápido, con gran presencia y mayor reactividad magnética (más salida en las pastillas).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tab: Afinación */}
        <div id="afinacion" className={`tab-content ${activeTab === "afinacion" ? "active" : ""}`}>
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-lg relative overflow-hidden">
            {/* Abstract decorative element */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-amber-400 mb-4">El Mito del Drop Tuning</h3>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">¿Sets &ldquo;Light Top, Heavy Bottom&rdquo; (Agudos ligeros, Graves pesados)?</h4>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Históricamente, los guitarristas han utilizado calibres híbridos (ej. 10-52) para afinaciones como Drop D o Drop C, creyendo que las cuerdas graves más gruesas compensarían la pérdida de tensión al afinar más grave.
            </p>

            <div className="bg-slate-900 rounded-lg p-5 border border-red-500/30">
              <h5 className="text-red-400 font-bold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                El Problema Matemático
              </h5>
              <p className="text-slate-400 text-sm mb-4">
                Según los expertos de <em>Stringjoy</em>, las matemáticas no cuadran. Al bajar la afinación de la sexta cuerda (de E a D), la tensión cae drásticamente. Incluso usando un juego de &ldquo;graves pesados&rdquo;, la cuerda afinada en Drop D a menudo queda con <strong>menos tensión</strong> que el resto de las cuerdas, sintiéndose floja y desequilibrada (flubby).
              </p>

              <h5 className="text-green-400 font-bold mb-2 mt-4 flex items-center">
                <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                La Solución
              </h5>
              <p className="text-slate-400 text-sm">
                Para afinaciones bajas (Drop Tuning), la recomendación profesional es utilizar <strong>Sets Custom (Personalizados)</strong>. Utilizar calculadoras de tensión te permite armar un set donde cada cuerda mantenga una tensión uniforme (ej. entre 16 y 18 lbs por cuerda) independientemente de a qué nota esté afinada, logrando así un mástil estable y una ejecución perfecta.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Guide footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center mt-auto">
        <p className="text-slate-500 text-sm">Generado en base a las fuentes proporcionadas del cuaderno del usuario.</p>
      </footer>

      {/* Mongus site footer */}
      <Footer />
    </div>
  );
}

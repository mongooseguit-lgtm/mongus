"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ArchivePhoto {
  id: string;
  src: string;
  title: string;
  venue: string;
  year: string;
  category: "escenario" | "auditorio" | "detalle";
  aspect: string;
}

const ARCHIVE_PHOTOS: ArchivePhoto[] = [
  {
    id: "auditorio-cdmx",
    src: "/photos/live-auditorio-cdmx.jpeg",
    title: "AUDITORIO NACIONAL",
    venue: "Ciudad de México",
    year: "ARCHIVO",
    category: "auditorio",
    aspect: "square",
  },
  {
    id: "coliseo-merida-1",
    src: "/photos/live-coliseo-merida-1.jpg",
    title: "COLISEO MÉRIDA · ENTRADA",
    venue: "Mérida, Yucatán",
    year: "ARCHIVO",
    category: "escenario",
    aspect: "landscape",
  },
  {
    id: "stage-red",
    src: "/photos/mongus-stage-red.jpeg",
    title: "INCANDESCENCIA ROJA",
    venue: "Escenario Principal",
    year: "2026",
    category: "escenario",
    aspect: "portrait",
  },
  {
    id: "coliseo-merida-11",
    src: "/photos/live-coliseo-merida-11.jpg",
    title: "LUCES & AMPLIFICACIÓN",
    venue: "Coliseo Mérida",
    year: "ARCHIVO",
    category: "escenario",
    aspect: "landscape",
  },
  {
    id: "guitar-close",
    src: "/photos/mongus-guitar-close.jpeg",
    title: "ATAQUE & TENSIÓN",
    venue: "Primer Plano",
    year: "ARCHIVO",
    category: "detalle",
    aspect: "portrait",
  },
  {
    id: "soundcheck",
    src: "/photos/live-soundcheck.jpg",
    title: "SOUNDCHECK EN LA PENUMBRA",
    venue: "Auditorio Nacional",
    year: "ARCHIVO",
    category: "auditorio",
    aspect: "landscape",
  },
  {
    id: "cumbres-venezuela",
    src: "/photos/live-cumbres-venezuela.jpg",
    title: "AUDITORIO CUMBRES",
    venue: "Venezuela",
    year: "ARCHIVO",
    category: "escenario",
    aspect: "landscape",
  },
  {
    id: "coliseo-merida-74",
    src: "/photos/live-coliseo-merida-74.jpg",
    title: "SOLO EN LA ARENA",
    venue: "Coliseo Mérida",
    year: "ARCHIVO",
    category: "detalle",
    aspect: "landscape",
  },
  {
    id: "auditorio-2012",
    src: "/photos/live-auditorio-2012.jpeg",
    title: "NOCHE MAGNA",
    venue: "Auditorio Nacional CDMX",
    year: "ARCHIVO",
    category: "auditorio",
    aspect: "square",
  },
];

export default function ArchivoPage() {
  const [selectedFilter, setSelectedFilter] = useState<"todas" | "escenario" | "auditorio" | "detalle">("todas");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedFilter === "todas"
    ? ARCHIVE_PHOTOS
    : ARCHIVE_PHOTOS.filter((p) => p.category === selectedFilter);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  // Lock body scroll when Lightbox is active
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhotoIndex]);

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <main className="archivo-page">
      <Header />

      <section className="archive section" id="archivo">
        <div className="archive-intro">
          <div>
            <p className="kicker">02 / ARCHIVO VISUAL</p>
            <h2>
              Escenarios,<br />
              luces y <em>madera.</em>
            </h2>
          </div>
          <p className="archive-note">
            Fragmentos de noches, auditorios, arenas<br />y todo lo que ocurre frente a la multitud.
          </p>
        </div>

        {/* Filtros de galería */}
        <div className="archive-filter-bar">
          <span className="filter-label">FILTRAR POR:</span>
          {(["todas", "escenario", "auditorio", "detalle"] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
              onClick={() => {
                setSelectedFilter(filter);
                setActivePhotoIndex(null);
              }}
            >
              {filter.toUpperCase()}
            </button>
          ))}
          <span className="photos-count">{filteredPhotos.length} FOTOGRAFÍAS</span>
        </div>

        {/* Gallery Grid */}
        <div className="archive-masonry-grid">
          {filteredPhotos.map((photo, idx) => (
            <figure
              key={photo.id}
              className={`archive-item-card ${photo.aspect}`}
              onClick={() => setActivePhotoIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePhotoIndex(idx);
                }
              }}
              aria-label={`Ver foto ${photo.title} en tamaño completo`}
            >
              <div className="archive-img-wrap">
                <Image
                  src={photo.src}
                  alt={`${photo.title} — ${photo.venue}`}
                  fill
                  sizes="(max-width: 600px) 94vw, (max-width: 1024px) 46vw, 31vw"
                  className="archive-card-img"
                />
                <span className="archive-idx-badge">{String(idx + 1).padStart(2, "0")}</span>
                <div className="archive-zoom-indicator">
                  <span>EXPANDIR ↗</span>
                </div>
              </div>
              <figcaption>
                <strong>{photo.title}</strong>
                <span>{photo.venue} · {photo.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="gallery-callout">
          ESTO APENAS<br />
          <em>COMIENZA.</em>
        </p>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <span className="lightbox-counter">
                {String((activePhotoIndex ?? 0) + 1).padStart(2, "0")} / {String(filteredPhotos.length).padStart(2, "0")}
              </span>
              <div className="lightbox-titles">
                <h3>{activePhoto.title}</h3>
                <p>{activePhoto.venue} · {activePhoto.year}</p>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setActivePhotoIndex(null)}
                aria-label="Cerrar visor de fotografía"
              >
                ✕ CERRAR
              </button>
            </div>

            <div className="lightbox-media-wrap">
              <button
                type="button"
                className="lightbox-nav-btn prev"
                onClick={handlePrev}
                aria-label="Fotografía anterior"
              >
                ←
              </button>

              <div className="lightbox-image-container">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  priority
                  className="lightbox-main-img"
                  sizes="(max-width: 1200px) 94vw, 1200px"
                />
              </div>

              <button
                type="button"
                className="lightbox-nav-btn next"
                onClick={handleNext}
                aria-label="Siguiente fotografía"
              >
                →
              </button>
            </div>

            <div className="lightbox-footer">
              <span>MONGUS ARCHIVO HISTÓRICO EN VIVO</span>
              <span>USA LAS TECLAS ← → O ESC</span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

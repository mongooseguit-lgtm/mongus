"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Mongus, volver al inicio">
        MONGUS<span>®</span>
      </Link>
      <nav aria-label="Navegación principal">
        <Link href="/musica" className={pathname === "/musica" ? "active" : ""}>
          Música
        </Link>
        <Link href="/archivo" className={pathname === "/archivo" ? "active" : ""}>
          Archivo
        </Link>
        <Link href="/diario" className={pathname === "/diario" ? "active" : ""}>
          Diario
        </Link>
        <Link href="/recursos" className={pathname === "/recursos" ? "active" : ""}>
          Recursos
        </Link>
        <Link href="/contacto" className={pathname === "/contacto" ? "active" : ""}>
          Contacto
        </Link>
      </nav>
      <Link className="menu-index" href="/musica" aria-label="Ir a música">
        INDEX / 01
      </Link>
    </header>
  );
}

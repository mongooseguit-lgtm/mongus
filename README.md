# Mongus — sitio oficial

Primera versión del sitio de Mongus: una base editorial para música, archivo
visual, diario y fechas en vivo. El contenido actual es provisional y está
pensado para reemplazarse gradualmente con fotografías, lanzamientos y textos
reales.

## Desarrollo local

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

## Verificación

```bash
npm test
```

## Estructura principal

- `app/page.tsx`: contenido y secciones de la portada.
- `app/globals.css`: dirección visual, movimiento y diseño responsive.
- `app/layout.tsx`: idioma y metadata pública del sitio.
- `public/`: fotografías, portadas, audio y otros recursos futuros.

## Próximas etapas

1. Sustituir el arte provisional por fotografías reales.
2. Conectar perfiles sociales y plataformas musicales.
3. Convertir las notas del diario en publicaciones individuales.
4. Publicar el repositorio en GitHub y configurar Vercel.

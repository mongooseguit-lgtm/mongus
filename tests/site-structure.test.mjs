import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("keeps the complete Mongus multi-page structure", async () => {
  const home = await readFile(new URL("app/page.tsx", root), "utf8");
  const musica = await readFile(new URL("app/musica/page.tsx", root), "utf8");
  const archivo = await readFile(new URL("app/archivo/page.tsx", root), "utf8");
  const diario = await readFile(new URL("app/diario/page.tsx", root), "utf8");
  const recursos = await readFile(new URL("app/recursos/page.tsx", root), "utf8");
  const contacto = await readFile(new URL("app/contacto/page.tsx", root), "utf8");

  assert.match(home, /id=["']top["']/);
  assert.match(musica, /id=["']musica["']/);
  assert.match(archivo, /id=["']archivo["']/);
  assert.match(diario, /id=["']diario["']/);
  assert.match(diario, /id=["']fechas["']/);
  assert.match(recursos, /id=["']recursos["']/);
  assert.match(contacto, /id=["']contacto-main["']/);

  assert.match(home, /MONGUS/);
  assert.match(recursos, /CALCULADORA DE TENSIÓN/);
});

test("includes all production photos and audio previews", async () => {
  const photos = [
    "mongus-stage-lights.jpeg",
    "mongus-stage-red.jpeg",
    "mongus-guitar-close.jpeg",
    "mongus-arena.jpeg",
    "mongus-purple-stage.jpeg",
    "hero-new.png",
    "live-auditorio-cdmx.jpeg",
    "live-coliseo-merida-1.jpg",
  ];

  const audio = [
    "under-the-rain-m2.m4a",
    "battle.m4a",
    "i-know.m4a",
    "under-the-rain-classic.mp3",
  ];

  await Promise.all(photos.map((name) => access(new URL(`public/photos/${name}`, root))));
  await Promise.all(audio.map((name) => access(new URL(`public/audio/${name}`, root))));
});

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("keeps the complete Mongus homepage structure", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  for (const id of ["top", "musica", "archivo", "diario", "fechas", "contacto"]) {
    assert.match(page, new RegExp(`id=["']${id}["']`));
  }

  assert.match(page, /from "next\/image"/);
  assert.match(page, /MONGUS/);
  assert.match(page, /PRÓXIMO LANZAMIENTO/);
});

test("includes all selected production photos", async () => {
  const names = [
    "mongus-stage-lights.jpeg",
    "mongus-stage-red.jpeg",
    "mongus-guitar-close.jpeg",
    "mongus-arena.jpeg",
    "mongus-purple-stage.jpeg",
  ];

  await Promise.all(names.map((name) => access(new URL(`public/photos/${name}`, root))));
});

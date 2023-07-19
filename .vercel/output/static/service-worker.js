const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  s + "/_app/immutable/entry/app.ed0dbc65.js",
  s + "/_app/immutable/nodes/0.c903e916.js",
  s + "/_app/immutable/nodes/1.5e239d53.js",
  s + "/_app/immutable/assets/2.165a603e.css",
  s + "/_app/immutable/nodes/2.b5eebfb3.js",
  s + "/_app/immutable/assets/3.33e4d4ee.css",
  s + "/_app/immutable/nodes/3.3b16c341.js",
  s + "/_app/immutable/assets/4.7276f4dc.css",
  s + "/_app/immutable/nodes/4.431c41f2.js",
  s + "/_app/immutable/assets/Icon.86e72639.css",
  s + "/_app/immutable/chunks/Icon.9e590657.js",
  s + "/_app/immutable/chunks/control.f5b05b5f.js",
  s + "/_app/immutable/chunks/index.d9189012.js",
  s + "/_app/immutable/chunks/layout.6bfed1c8.js",
  s + "/_app/immutable/assets/layout.0dc4c4ca.css",
  s + "/_app/immutable/chunks/products.647cff99.js",
  s + "/_app/immutable/chunks/scheduler.33a57a0d.js",
  s + "/_app/immutable/chunks/singletons.04bb2c32.js",
  s + "/_app/immutable/entry/start.483187a7.js"
], u = [
  s + "/app-icons/instagram.svg",
  s + "/app-icons/snapchat.svg",
  s + "/app-icons/tiktok.svg",
  s + "/app-icons/whatsapp.svg",
  s + "/favicon.png",
  s + "/yoo-products/Aesthetics.jpg",
  s + "/yoo-products/batiks.jpg",
  s + "/yoo-products/beads.jpg",
  s + "/yoo-products/camera.jpg",
  s + "/yoo-products/drawings.jpg",
  s + "/yoo-products/embroidery.jpg",
  s + "/yoo-products/graphic.jpg",
  s + "/yoo-products/painting.jpg",
  s + "/yoo-products/paws.jpg",
  s + "/yoo-products/pottery.png",
  s + "/yoo-products/resin.jpg",
  s + "/yoo-products/scribblings.png",
  s + "/yoo-products/sculpture.jpg",
  s + "/yoo-products/stitches.jpg",
  s + "/yoo-products/tie-dye.jpg"
], r = "1689786815289", o = `cache-${r}`, n = [...i, ...u];
self.addEventListener("install", (a) => {
  async function e() {
    await (await caches.open(o)).addAll(n);
  }
  a.waitUntil(e());
});
self.addEventListener("activate", (a) => {
  async function e() {
    for (const t of await caches.keys())
      t !== o && await caches.delete(t);
  }
  a.waitUntil(e());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function e() {
    const t = new URL(a.request.url), c = await caches.open(o);
    if (n.includes(t.pathname))
      return c.match(t.pathname);
    try {
      const p = await fetch(a.request);
      return p.status === 200 && c.put(a.request, p.clone()), p;
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(e());
});

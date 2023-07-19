import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.6a4fe43e.js","_app/immutable/chunks/scheduler.13eb3ead.js","_app/immutable/chunks/index.4a496391.js"];
export const stylesheets = [];
export const fonts = [];

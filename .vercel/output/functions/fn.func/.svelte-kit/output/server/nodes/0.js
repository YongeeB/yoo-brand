import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.1f33bd81.js","_app/immutable/chunks/layout.bf780aec.js","_app/immutable/chunks/scheduler.74c35085.js","_app/immutable/chunks/index.c5889ac7.js"];
export const stylesheets = [];
export const fonts = [];

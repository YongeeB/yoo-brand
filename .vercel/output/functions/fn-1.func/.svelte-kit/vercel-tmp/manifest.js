export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app-icons/instagram.svg","app-icons/snapchat.svg","app-icons/tiktok.svg","app-icons/whatsapp.svg","favicon.png","yoo-products/Aesthetics.jpg","yoo-products/batiks.jpg","yoo-products/beads.jpg","yoo-products/camera.jpg","yoo-products/drawings.jpg","yoo-products/embroidery.jpg","yoo-products/graphic.jpg","yoo-products/painting.jpg","yoo-products/paws.png","yoo-products/pottery.png","yoo-products/resin.jpg","yoo-products/scribblings.png","yoo-products/sculpture.jpg","yoo-products/stitches.jpg","yoo-products/tie-dye.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.60e0d8d2.js","app":"_app/immutable/entry/app.4345ccd1.js","imports":["_app/immutable/entry/start.60e0d8d2.js","_app/immutable/chunks/scheduler.b168ff3b.js","_app/immutable/chunks/singletons.d1adcfb0.js","_app/immutable/entry/app.4345ccd1.js","_app/immutable/chunks/scheduler.b168ff3b.js","_app/immutable/chunks/index.a463bea2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app-icons/instagram.svg","app-icons/snapchat.svg","app-icons/tiktok.svg","app-icons/whatsapp.svg","favicon.png","yoo-products/Aesthetics.jpg","yoo-products/batiks.jpg","yoo-products/beads.jpg","yoo-products/camera.jpg","yoo-products/drawings.jpg","yoo-products/embroidery.jpg","yoo-products/graphic.jpg","yoo-products/painting.jpg","yoo-products/paws.png","yoo-products/pottery.png","yoo-products/resin.jpg","yoo-products/scribblings.png","yoo-products/sculpture.jpg","yoo-products/stitches.jpg","yoo-products/tie-dye.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.48e82344.js","app":"_app/immutable/entry/app.cdff05b2.js","imports":["_app/immutable/entry/start.48e82344.js","_app/immutable/chunks/scheduler.74c35085.js","_app/immutable/chunks/singletons.3cccd18b.js","_app/immutable/entry/app.cdff05b2.js","_app/immutable/chunks/scheduler.74c35085.js","_app/immutable/chunks/index.c5889ac7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

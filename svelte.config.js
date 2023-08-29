import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/components",
			$utils: "src/utils",
			$icons: "src/icons",
			$main: "src",
			$assets: "static"
		}
	}
};

export default config;

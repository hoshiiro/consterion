import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$content: path.resolve('./content')
		}
	},
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), './content']
		}
	}
});

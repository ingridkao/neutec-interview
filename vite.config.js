import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const processEnvDev = (env) => (env && env.NODE_ENV === 'development')? '': '/neutec-interview/' 

// https://vitejs.dev/config/
export default defineConfig({
	base: processEnvDev(process.env),
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})

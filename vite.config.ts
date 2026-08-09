import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// Site utilisateur GitHub Pages (gauthiercpx.github.io) : servi à la racine.
// `base: '/'` reste correct le jour où un domaine personnalisé est branché.
export default defineConfig({
    base: '/',
    plugins: [react()],
    build: {
        target: 'es2022',
        sourcemap: false,
    },
});

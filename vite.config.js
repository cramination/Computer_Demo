// vite.config.js
import { defineConfig } from 'vite';
import gltf from 'vite-plugin-gltf';

export default defineConfig({
    plugins: [
        gltf() 
      ],
      assetsInclude: ['public/assets/Computer-case-compressed.gltf'],
      base: "/Computer_Demo/",
      server: {

        port: 5137 // Change this to your desired port

    }
});
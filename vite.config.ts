import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from 'dns';
import svgr from 'vite-plugin-svgr' 

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: "localhost",
    port: 3002,
},
});

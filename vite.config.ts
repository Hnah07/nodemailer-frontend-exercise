import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    allowedHosts: [
      "nodemailer-frontend-exercise.onrender.com",
      ".onrender.com", // This will allow all onrender.com subdomains
    ],
  },
});

import { defineConfig } from 'vite';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ให้แน่ใจว่ามีการอ้างอิงถึงไฟล์ JSX และ TSX ของคุณ
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
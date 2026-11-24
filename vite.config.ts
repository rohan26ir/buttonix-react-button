// vite.config.ts — Buttonix build & test configuration
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/__tests__/**"],
    }),
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      name: "Buttonix",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Keep React as external — consumers supply their own
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
        },
      },
    },
    // Emit source maps for easier debugging by consumers
    sourcemap: true,
    // Keep CSS emission (consumers import 'buttonix/style.css')
    cssCodeSplit: false,
  },

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  // ─── Vitest ────────────────────────────────────────────────────────────────
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/__tests__/**", "src/index.ts"],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },
    },
  },
});

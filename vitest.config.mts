import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}", "eslint-rules/**/*.test.mjs"],
    css: false,
    pool: "vmThreads",
    testTimeout: 15000,
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.{ts,tsx}", "src/**/*.types.ts", "src/**/index.ts", "src/app/**", "src/test/**"],
      reporter: ["text-summary", "html"],
    },
  },
});

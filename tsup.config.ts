import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],  // Ensure this exists
  dts: true,
  format: ["cjs", "esm"],
  clean: true,
});
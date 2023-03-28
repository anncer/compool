import type { InlineConfig } from "vite";
import { terser } from "rollup-plugin-terser";

const config: InlineConfig = {
  mode: "production",
  build: {
    target: "modules",
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      output: [
        {
          format: "umd",
          entryFileNames: `compool.js`,
          name: "compool"
        },
        {
          format: "umd",
          name: "compool",
          entryFileNames: `compool.min.js`,
          plugins: [terser()]
        }
      ]
    },
    // 开启lib模式
    lib: {
      entry: "src/index.ts",
      name: "compool",
      fileName: (format) => `compool.${format}.js`
    }
  }
};

export default config

import type { InlineConfig } from "vite";

const config: InlineConfig = {
  mode: "production",
  build: {
    target: "modules",
    outDir: "./es",
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: ["./src/index.ts"],
      output: [
        {
          format: "es",
          dir: "./es",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "components"
        },
        {
          format: "commonjs",
          dir: "./cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "components"
        }
      ]
    },
    // 开启lib模式，但不使用下面配置
    lib: {
      entry: "../packages/components/index.ts",
      formats: ["es", "cjs"]
    }
  }
};

export default config

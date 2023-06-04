import { resolve } from "path";

const root = resolve(__dirname, "src");

module.exports = {
    root: root,
    build: {
      outDir: "../dist",
      rollupOptions: {
        input: {
            main: resolve(root, 'index.html')
        },
      },
    },
  };
  
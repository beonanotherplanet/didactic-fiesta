import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.ts",
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({ extensions, include: ["src/**/*"], runtimeHelpers: true }),
    typescript(),
    url(),
  ],
  output: [
    {
      file: "dist/react-native/index.ts",
      format: "es",
    },
    {
      file: "dist/react-web/index.ts",
      format: "es",
      paths: {
        "react-native": "react-native-web",
      },
    },
  ],
};

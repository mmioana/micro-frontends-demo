import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// To handle css files
import postcss from "rollup-plugin-postcss";

import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';

import packageJson from "./package.json" assert {type: 'json'};

export default [
    {
        input: 'src/main.ts',
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                // typescript: ttypescript,
                // useTsconfigDeclarationDir: true,
                emitDeclarationOnly: true,
                tsconfig: "./tsconfig.json",
                // verbosity: 3,
            }),
            postcss(),

            terser(),
            image()
        ],
    },
    {
        input: "dist/esm/main.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],

        external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports 
    },
];
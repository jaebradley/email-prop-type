import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const GLOBALS = {
  'email-validator': 'email-validator',
};

const EXTERNAL = [
  'email-validator',
];

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name,
      globals: GLOBALS,
      exports: 'default',
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      globals: GLOBALS,
      exports: 'default',
    },
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      globals: GLOBALS,
      exports: 'default',
    },
  ],
  external: EXTERNAL,
  plugins: [
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    localResolve(),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      preferBuiltins: true,
      browser: true,
      modulesOnly: true,
    }),
    terser(),
    commonjs(),
    filesize(),
  ],
};

export default config;

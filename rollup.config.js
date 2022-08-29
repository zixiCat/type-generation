import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
      strict: false,
    },
  ],
  plugins: [shebangPlugin(), typescript(), terser()],
};

/**
 * add shebang line to top of index
 * @return {string} final code
 */
function shebangPlugin() {
  return {
    name: 'shebangPlugin',
    renderChunk(code, chunk) {
      const id = chunk.fileName;
      if (id !== 'index.js') return null;
      return '#!/usr/bin/env node\n' + code;
    },
  };
}

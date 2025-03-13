import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'd3': 'd3'
    }
  },
  external: ['react', 'react-dom', 'd3'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    babel({
      presets: ['@babel/preset-react', '@babel/preset-env'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
};
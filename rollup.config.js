import babel from '@rollup/plugin-babel'
import pkg from './package.json'

const config = {
  input: 'src/index.js',
  external: ['redux', 'react-redux', 'react'],
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    strict: false,
    globals: {
      redux: 'redux',
      'react-redux': 'react-redux',
      react: 'React'
    },
    name: 'ng-redux-connect'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
}

export default config

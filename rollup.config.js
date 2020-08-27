import babel from '@rollup/plugin-babel'

const config = {
  input: 'src/index.js',
  external: ['redux', 'react-redux', 'react'],
  output: {
    file: 'bundle.js',
    format: 'cjs',
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

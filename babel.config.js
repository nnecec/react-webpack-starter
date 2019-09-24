const presets = [
  ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
  '@babel/preset-react'
]
const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-transform-runtime',
  'react-hot-loader/babel'
]

module.exports = {
  presets,
  plugins
}

// import json from 'rollup-plugin-json'
// import commonjs from 'rollup-plugin-commonjs'
// import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

// const resolveModules = resolve({
//   only: ['lodash']
// })

export default [
  {
    input: 'index.js',
    plugins: [
      // resolveModules,
      // commonjs(),
      // json(),
      terser()
    ],
    external: [
      'react',
      'prop-types'
    ],
    output: {
      format: 'umd',
      name: 'SortableList',
      file: 'bundle/react-sortable-dnd-list.js',
      sourcemap: true,
      globals: {
        'react': 'React',
        'prop-types': 'PropTypes'
      }
    }
  }
]

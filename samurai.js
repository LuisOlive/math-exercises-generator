import { Samurai } from 'samuraijs'
import $routes from './routes.js'

import * as fractions from './src/mathProblems/problems/fractions.js'
import alphanumeric from './src/alphanumeric.js'
import katex from './src/katex.js'

new Samurai({
  paths: {
    source: 'pages',
    destination: 'dist',
    assets: ['src/assets'],
    exclude: ['src/templates', 'src/styles', 'src/scripts', 'src/layouts', 'src/macros', 'src/filters', 'src/methods']
  },
  nunjucks: {
    trimBlocks: true,
    globals: {
      $routes,
      alphanumeric,
      katex,
      divisionBy2: fractions.divisionBy2Problem,
      simplifying: fractions.simplifyingProblem,
      fractionOp: fractions.fractionOpProblem
    }
  }
})

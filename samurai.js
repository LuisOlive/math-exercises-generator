import { Samurai } from 'samuraijs'
import $routes from './routes.js'

import * as fractions from './src/methods/problems/fractions.js'

new Samurai({
  paths: {
    source: 'src',
    destination: 'dist',
    assets: ['src/assets'],
    exclude: ['src/templates', 'src/styles', 'src/scripts', 'src/layouts', 'src/macros', 'src/filters', 'src/methods']
  },
  nunjucks: {
    trimBlocks: true,
    globals: {
      $routes,
      divisionBy2: fractions.divisionBy2Problem,
      simplifying: fractions.simplifyingProblem,
      fractionOp: fractions.fractionOpProblem
    }
  }
})

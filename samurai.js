import { Samurai } from 'samuraijs'
import $routes from './routes.js'

import * as fr from './src/mathProblems/problems/fractions.js'
import * as oo from './src/mathProblems/problems/operationsOrder.js'

import alphanumeric from './src/alphanumeric.js'
import katex from './src/katex.js'

new Samurai({
  paths: {
    source: 'pages',
    destination: 'dist',
    assets: ['public'],
    exclude: ['src/**', 'pages/**/__*']
  },
  nunjucks: {
    trimBlocks: true,
    globals: {
      $routes,
      alphanumeric,
      katex,
      divisionBy2: fr.divisionBy2Problem,
      simplifying: fr.simplifyingProblem,
      fractionOp: fr.fractionOpProblem,
      opsOrderProblemLevel1: oo.level1,
      opsOrderProblemLevel2: oo.level2,
      opsOrderProblemLevel3: oo.level3
    }
  }
})

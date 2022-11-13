import _ from 'lodash'
import * as alg from '../algebra.js'

export function divisionBy2Problem() {
  const a = alg.rand(1000000)

  return { problem: `${a} / 2`, ans: a / 2 }
}

export function simplifyingProblem() {
  const a = _.random(2, 10)
  const b = alg.rand(10)
  const c = alg.rand(10)

  return alg.solve(a * b, '/', a * c)
}

export function fractionOpProblem(level = 1) {
  let base = `${alg.randFraction()}`

  while (level-- >= 1) {
    base += `${alg.randOp()} (${alg.randFraction()})`

    if (level < -50) {
      console.log('too many iterations')
      return 0
    }
  }

  return alg.solve(base)
}

import * as alg from '../algebra.js'

export function divisionBy2Problem() {
  const dividend = alg.rand(1000000)

  return {
    problem: `${dividend}/2`,
    ans: dividend / 2
  }
}

export function simplifyingProblem() {
  const a = alg.rand(10)
  const b = alg.rand(10)
  const c = alg.rand(10)

  return alg.solve(a * b, '/', a * c)
}

export function fractionOpProblem(level = 1) {
  let base = `(${alg.randFraction()})`

  while (level--) {
    base += `(${alg.randOp()} ${alg.randFraction()})`
  }

  return alg.solve(base)
}

import _ from 'lodash'
import { create, all } from 'mathjs'

const math = create(all, { number: 'Fraction' })
const vars = 'abcdefghijkLmnopqrstuvwxyz1'

/*
  random generators
*/

export const random = _.random

export function rand(max = 20) {
  return _.random(2, max)
}

export function randVar(p = '') {
  return _.sample(vars + p + p + p + p + p)
}

export function randOp(ops = '+-*÷/+-*') {
  return _.sample(ops)
}

export function randFraction() {
  return `${rand(10)} / ${rand(10)}`
}

/**
 * expression to simplify to be human-readable
 * @param {string} str
 */
export function expression(str) {
  return math.simplify(str).toString() // alt+96
}

export function randExpression(coeff = rand(), symbol = randVar(), potence = 1) {
  return `${coeff} * ${symbol} ^ ${potence}`
}

export function solve(...expressions) {
  const problem = expressions.join(' ')
  const strictMathProblem = problem.split('÷').join('/')

  try {
    const ans = math.format(math.simplify(strictMathProblem), { fraction: 'ratio', notation: 'fixed' })

    return { problem, ans }
  } catch {
    console.error('failed to solve: ', problem)
    console.error('- strict: ', strictMathProblem)
    return { problem, ans: '-99999999' }
  }
}

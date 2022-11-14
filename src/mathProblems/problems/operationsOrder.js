import _ from 'lodash'
import * as alg from '../algebra.js'

export function opsOrderProblem() {
  return alg.solve(
    alg.rand(),
    alg.randOp('+-'),

    alg.rand(10),
    alg.randOp('+-*÷'),

    '(',
    alg.rand(),
    alg.randOp('+-*÷'),

    alg.rand(10),
    alg.randOp('+-*÷'),

    alg.rand(10),
    ')',

    alg.randOp('+-÷'),
    alg.rand(10)
  )
}

export function level1() {
  return alg.solve(
    alg.rand(10),
    alg.randOp('+-*÷'),

    alg.rand(10),
    alg.randOp('+-*÷'),

    alg.rand(10),
    alg.randOp('+-*÷'),

    alg.rand(10)
  )
}

export function level3() {
  return alg.solve(
    alg.rand(10),

    alg.randOp('+-*÷'),

    alg.rand(10),
    alg.randOp('+-^^'),
    alg.rand(3),

    alg.randOp('+-'),

    alg.rand(10),
    '^',
    alg.rand(3),

    alg.randOp('+-'),

    alg.rand(10),
    alg.randOp('+-*÷^^'),
    alg.rand(3)
  )
}

export function level2() {
  return alg.solve(
    alg.rand(),
    alg.randOp('+-'),

    alg.rand(10),
    alg.randOp('+-*÷'),

    '(',
    alg.rand(),
    alg.randOp('+-*÷'),

    alg.rand(10),
    alg.randOp('+-*÷'),

    alg.rand(10),
    ')',

    alg.randOp('+-÷'),
    alg.rand(10)
  )
}

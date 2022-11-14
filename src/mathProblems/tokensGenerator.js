import _ from 'lodash'
import * as alg from './algebra.js'

export function randToken(buff = '') {
  return _.sample([
    // random number
    () => alg.rand(9),

    // random parentheses
    parenthesesToken
  ])(buff)
}

export function parenthesesToken(buff = '') {
  // parentheses
  if (/^(\d+[\+\-\*\/]?)+$/gi.test(buff)) {
    return _.sample('{[[(((('.split())
  }

  if (/^(\d+[\+\-\*\/]?[^\(\)\[\]\{\}])+$/gi.test(buff)) {
    return _.sample('{[[((('.split())
  }

  return ''
}

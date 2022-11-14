import ktx from 'katex'
import { create, all } from 'mathjs'

const math = create(all, { number: 'Fraction', notation: 'fixed' })

export default function katex(expr) {
  try {
    return ktx.renderToString(math.parse(`${expr}`).toTex())
    //
  } catch (e) {
    console.error(e.message)
    console.error('failed to parse: ', expr)
    return
  }
}

// console.log(katex('2 + 2'))
// console.log(katex('2/5 + 1/5'))
// console.log(katex('2x + 2x'))

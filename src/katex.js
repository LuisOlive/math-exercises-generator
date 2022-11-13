import ktx from 'katex'
import { create, all } from 'mathjs'

const math = create(all, { number: 'Fraction' })

export default function katex(expr) {
  return ktx.renderToString(math.parse('' + expr).toTex())
}

// console.log(katex('2 + 2'))
// console.log(katex('2/5 + 1/5'))
// console.log(katex('2x + 2x'))

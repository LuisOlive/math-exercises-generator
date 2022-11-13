import _ from 'lodash'

export default function alphanumeric(/** @type string*/ str) {
  return _(str)
    .trim()
    .replaceAll(/\s|\n|\t/gi, '-')
    .toLocaleLowerCase()
    .replaceAll('á', 'a')
    .replaceAll('é', 'e')
    .replaceAll('í', 'i')
    .replaceAll('ó', 'o')
    .replaceAll('ú', 'u')
    .replaceAll('ñ', 'n')
    .replaceAll(/[^a-z0-9\-]/gi, '')
    .replace(/\-{2,100}/gi, '-')
}

// console.log(
//   alphanumeric(`
//     Lo que sea           usando 13465 lenguajes
//     como el !"#"%# español
//     británico sísmico
//   `)
// )

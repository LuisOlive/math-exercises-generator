import { Samurai } from 'samuraijs'

new Samurai({
  paths: {
    source: 'src',
    destination: 'dist',
    assets: ['src/assets'],
    exclude: ['src/templates', 'src/styles', 'src/scripts', 'src/layouts', 'src/macros', 'src/filters']
  },
  nunjucks: {
    trimBlocks: true
  }
})

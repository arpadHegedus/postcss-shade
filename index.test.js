const plugin = require('./')
const postcss = require('postcss')
function testCode(code, expected, options = {}, plugins = []) {
  return () => {
    if (plugins.length === 0) plugins.push(plugin(options));
    return postcss(plugins)
      .process(code, { from: undefined })
      .then(result => {
        expect(result.css.replace(/[\n]/ig, '')).toEqual(expected);
      })
  }
}

it('can set shade', testCode(
  'div { color: shade(#34bbed, 80) }',
  'div { color: #2da0cc }'
))
it('can add to shade levels', testCode(
  'div { color: shade(#34bbed, +10) }',
  'div { color: #38c8ff }'
))
it('can retract from shade levels', testCode(
  'div { color: shade(#34bbed, -10) }',
  'div { color: #2ea6d3 }'
))

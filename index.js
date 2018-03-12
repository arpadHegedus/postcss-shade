const chromatism = require('chromatism')
const postcss = require('postcss')
const util = require('postcss-plugin-utilities')

function shade(object, color, level = '50') {
  color = util.getRGB(color)
  level = level.replace('%', '')
  if (!color.r && !color.g && !color.b) return color
  if (!level.startsWith('+') && !level.startsWith('-')) {
    level = level - chromatism.convert(color).hsv.v
  }
  color = Object.assign(color, chromatism.shade(parseFloat(level), color).rgb)
  return color.a ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : chromatism.convert(color).hex
}

module.exports = postcss.plugin('shade', opt => css => {
  util.parseFunction(css, 'shade', shade)
})

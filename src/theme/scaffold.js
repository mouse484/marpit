/** @module */
import Theme from '../theme'
import skipThemeValidationSymbol from './symbol'

const css = `
section {
  width: 1280px;
  height: 720px;

  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  scroll-snap-align: center center;
}

section::after {
  bottom: 0;
  content: attr(data-marpit-pagination);
  padding: inherit;
  pointer-events: none;
  position: absolute;
  right: 0;
}

section:not([data-marpit-pagination])::after {
  display: none;
}

/* Normalization */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
`.trim()

/**
 * The scaffold theme. It includes these features:
 *
 * - Define the default slide size.
 * - Set default style for `<section>`.
 * - Normalize `<h1>` heading style.
 *
 * @alias module:theme/scaffold
 * @type {Theme}
 */
const scaffoldTheme = Theme.fromCSS(css, { [skipThemeValidationSymbol]: true })

export default scaffoldTheme

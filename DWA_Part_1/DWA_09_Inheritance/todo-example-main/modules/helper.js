// @ts-check

// Inversion of control

/**
 * ..
 *@param {object} props
 * @param {string} props.dataAttr
 * @param {string} [props.value]
 * @param {HTMLElement| ShadowRoot} [props.target]
 * @returns {HTMLElement}
 */
export const getHtml = (props) => {
  const { dataAttr, value, target } = props

  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`


  const scope = target || document
  const element = scope.querySelector(selector)
  const isHtmlElement = element instanceof HTMLElement

  if (!isHtmlElement) {
    throw new Error(`${selector} attribute not found in HTML`)
  }
  return element
}
/**
 * ..
 *
 * @param {string} dataAttr
 * @param {string} [value]
 * @returns {boolean}
 */
export const doesHtmlExist = (dataAttr, value) => {
  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`

  const element = document.querySelector(selector)
  const isHtmlElement = element instanceof HTMLElement

  return isHtmlElement
}


/**
 * Creates a completely unique id value(UUID) to serve as a key for a objects
 * @return {string}
 */
export const createUniqueId =() => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
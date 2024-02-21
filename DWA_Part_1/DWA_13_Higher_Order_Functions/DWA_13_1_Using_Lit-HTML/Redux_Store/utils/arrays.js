// import { mergeArrays } from '../components/td-spacing.helpers.js;

import { mergeArrays } from "../components/td-spacing.helpers";

/**
 * @typedef {'xs'|'s'|'m'|'l'|'xl'} Measurement
 * @typedef {'left'|'right'|'top'|'bottom'} Direction
 */

/**
 *
 * @type {Array<Measurement>}
 */
const MEASUREMENTS = ['xs', 's', 'm', 'l', 'xl']

/**
 *
 * @type {Array<Direction>}
 */

const DIRECTIONS = ['left', 'right', 'top', 'bottom'];

/**
 *
 * @type {Record<Measurement, string>}
 */
const MEASUREMENTS_MAP = {
  xl: '--sl-spacing-3x-large',
  l: '--sl-spacing-x-large',
  m: '--sl-spacing-medium',
  s: '--sl-spacing-x-small',
  xs: '--sl-spacing-2x-small',
}

/**
 * @callback Join
 * @param {string} value1
 * @param {string} value2
 */

/**
 * @param {object} props
 * @param {Array<string>} props.array1
 * @param {Array<string>} props.array2
 * @param {Join} [props.join] if no callback is provided, then will simply combine as is.
 */

const handlejoin = (direction, measurement) => /* css */`
:host([${direction}='${measurement}']) { 
padding-${direction}: var(${MEASUREMENTS_MAP[measurement]})
}`

const css = mergeArrays({
  array1: DIRECTIONS,
  array2: MEASUREMENTS,
  join: handlejoin,
}).join(' ');

export const templateString = /* html */ `
<style>${css}</style>
<div><slot></slot></div>`

// export const templateString = DIRECTIONS.map((singleDirection) => {
//   return MEASUREMENTS.map((singleMeasurement) =>
//     `${singleDirection}="${singleMeasurement}"`
//   )
//
//   // .map((singleDirection) =>{
//   //   const result = MEASUREMENTS.map((singleMeasurement) => {
//   //     return `${singleDirection}="${singleMeasurement}"`
//   //   })
//   //   return result
// }).flat()
//   .map(attribute => `:host([${attribute}])`)


console.log(templateString)
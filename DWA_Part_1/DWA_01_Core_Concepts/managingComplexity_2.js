p = 9;
m = 2000;
vel = 1000;
acc = 2;
frcp = m * acc;
n = 5;
time = 10;
frcn = frcp * 4.44822;
cc = 3 / n;
acc2 = 90410 + p;
final = vel + (frcp / m) * time //should apply frcn instead
console.log('final velocity', final)

//code styles. must be clearer with naming
//standard style
//airbnb style

//global const uppercase
//gobal var - set
const CONVERSION_FACTOR = 4.44822
/*
//concepts must look visually different
const forceInPoundsSeconds = 50
const forceInNewtonsSeconds = forceInPoundsSeconds * CONVERSION_FACTOR
const timeAsSeconds = 10;
// if bolean use is const isTrue
//if event handler handlerClick =
//retrieve item const getTime =
//describe what thing is
const thrust1 = forceInPoundsSeconds * timeAsSeconds
//concise

//need to not be able to run if not correct
const force = {
    value:50,
    measurement: 'pounds-seconds'
}
console.log(force.measurement);
//pure function
*/
/**
 * calc the mars climate orbiter thruster amount.
 * Note that the provided value cano be newton-seconds or pounds-seconds(conversion will happen automatically.
 *
 * @param {object} props
 * @param {number} props.time - time as measured in seconds
 * @param {object} props.force
 * @param {number} props.force.value = force as measured in newton-seconds
 * @param {'newton-seconds'| 'pounds-seconds'} props.force.measurement
 * @returns {number}
 */
//code style - style guide. new properties on new lines. haveing indents in nested elements
const calcThrust = (props) =>{
    const { force, time} = props;
    const {value, measurement} = force;
    if (!force) throw new Error('"force" is required')
    if (!time) throw new Error('"force" is required')
    if (!value) throw new Error('"force" is required')
    if (!measurement) throw new Error('"force" is required')
//documentation - describe, types and shapes
    if(!['newton-seconds', 'pounds-seconds'].includes(measurement)){
        throw new Error(`"measurement" is required to be "newton-seconds" or "pounds-seconds", it is currently ${measurement}`)
    }

    const valueAsNewtonSeconds = measurement === 'newton-seconds' ?
        value:
        value * CONVERSION_FACTOR
return valueAsNewtonSeconds * time
}
//modular - reusable, keep relatable code close , put in box as obj or func
const thrust = calcThrust({
    time: 10,
    force: {
        value: 50,
        measurement: 'newton-second'
    }
})
console.log(thrust)

//two main methods to keep code modular - functional programming and OOP

//Abstraction - keep little pieces and then compose together
//programming is complex
//requirements evolving
//technical debt //
//scaling


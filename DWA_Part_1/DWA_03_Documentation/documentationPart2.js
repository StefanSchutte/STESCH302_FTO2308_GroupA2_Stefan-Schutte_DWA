//@ts-check

/*
write and map out everything before writing logic
    what need to be done

not planning prototype
map out what are key things.
    -task
    state

    figjam - backtick to start code block
 */
const state = {
    tasks: {
        'uuidgenerated-randomcodehjjiji': {
            id: 'uuidgenerated-randomcodehjjiji',
            title: 'wash the dog',
            completed: false,
            created: new Date('1/1/2020'),
            urgency: 'high',
            due: new Date('1/1/2023'),
        },

        'uuidgenerated-dmkhfdk':{
            id: 'uuidgenerated-dmkhfdk',
            title: 'clean the car',
            completed: true,
            created: new Date('1/1/2010'),
            urgency: 'medium',
            due: null,
        },
    },
}
/*
UUID generator

 */
const stat = {
    displaying: ['uuidgenerated-randomcodehjjiji'],
    filter:{
        search: '',
        urgency: 'any',
        sorthing: 'most recent',
    }
}

/*
important jsdoc to use = @param / @returns
 */

/**
 * Adds two numbers together. if only a single number is provided it will be added to itself.
 * @param {string | number} num1 - first half of addition
 * @param {number} [num2] - second half of addition
 * @returns {number}
 */
const addNumbers = (num1, num2) => {

    if (!num2){
        return num1 + num1
    } else {
        return num1 + num2
    }
}

//addNumbers('hello') - invalid

/**
 * @type {Date}
 */
const date  = new Date()

//typedef
/**
 * @typedef {'Cpt' | 'jhb' | 'Dbn' } Location
 */
/**
 * @param {Location} location
 * @param location
 */
//const calcFare = (location) => {...}

//typedef is used for creating objects

/**
 *
 */
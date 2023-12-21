const example = {
    value:{
        inner:[
            1,
            2,
            3,

        ]
    },
}

const data = {
    inner: {
        hello: [
            1,
            2,
            3,
        ]
    },

}

// if (hello === true) { console.log('Yes!')} else {console.log('No!')}
if (hello === true) {
    console.log('Yes!')
} else {
    console.log('No!')
};

//[1,2,3].concat([51,50], ['a','b','c']).slice(2,3).at(-1)
[1,2,3]
    .concat(
        [51,50],
        ['a','b','c'])
    .slice(2,3)
    .at(-1)

const one = 1;
const two = 2;
const three = 3;
//different but look same
const array = [one, two, three]
const [one, two, three] = array


/**
 * @typedef {'yes' | 'no'} Answer
 */
/**
 * @type {Answer}
 */
const answer = value
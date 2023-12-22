//@ts-check

import { createUniqueId } from './exampleWithJS'

/**
 *
 * @param {string} name - legal name of employee as appearing on id.
 * @returns {Employee}
 */
export const createEmployee = (name) => {
    const idEmployee = createUniqueId()


    return {
        id,
        name,
        created: new Date(),
    }
}

const createColleague = (name) => {
    createEmployee((name, 'Codespace'))
}

createEmployee('John Smith', "Woolworths")
createEmployee('John Venter', "Codespace");
createColleague('Schalk Venter');
createColleague('Renzo van Wyk');

//good abstraction should be composable
const createInspector = (name) => createEmployee(name, 'gov');
createInspector('James bond')

const createEvent = ({ attendees, title }) => {
    return {
        title,
        attendees,
        date: new Date(),
        completed: false,
    }
}

const event = createEvent({
        title: 'Annual 2015 Inspection',
    attendess: [
        createColleague('Schalk Venter'),
        createColleague("remo van wyk"),
        createInspector('mr big boss'),
    ],
}
)

//prosedural programming
//oop
//functional programming
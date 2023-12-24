//@ts-check

import { createUniqueId } from './exampleWithJS'

/**
 * @callback sendInvite
 * @returns {string}
 */

/**
 * @typedef {object} Employee
 * @porp {string} id
 * @porp {string} name
 * @porp {string} company
 * @prop {Date}} created
 * @prop {invite} invite
 */


/**
 *
 * @param {string} name - legal name of employee as appearing on id.
 * @returns {Employee}
 */
export const createEmployee = (name, company) => {
    //const idEmployee = createUniqueId()
    const id = new Date().getTime().toString();


    return {
        id,
        name,
        company,
        created: new Date(),
        invite: () => 'Not required'
    }
}

/**
 *
 * @param {string} name
 * @returns {Employee}
 */
const createColleague = (name) => {
    const employee = createEmployee(name, 'Codespace')
    employee.invite = () => {
        const answer = window.prompt(`Is ${attendeeName} attending?`)
        if (!answer || answer.trim() === '') throw new Error('Answer can not be empty')

        return answer
    };
    return employee;
}

createEmployee('John Smith', "Woolworths")
createEmployee('John Venter', "Codespace");
createColleague('Schalk Venter');
createColleague('Renzo van Wyk');

//good abstraction should be composable

const createStudent = (name) => {
    const employee = creatEmployee(name, "Codespace")

    employee.invite = () => {
        return "No";
    }
    return employee
}

/**
 *
 * @param {string} name
 * @return {Employee}
 */
const createInspector = (name) => {//createEmployee(name, 'gov');
//createInspector('James bond')
    const employee = createEmployee(name, 'gov')
    employee.invite = () => {
//send email
        return "Awaiting response"
    }

    return employee;
}

/**
 * @param {object} props
 * @param {string} props.title
 * @param {Array<Employee>} props.attendees
 */
const createEvent = (props) =>{

 const { attendees, title } = props

    const response ={}

    for (const {name: attendeeName, invite } of attendees){
        response[attendeeName] = invite();

    // for(const { name: attendeeName, company } of attendees){
    //     // if(company === 'Codespace') {
    //     //     const answer = window.prompt(`Is ${attendeeName} attending?`)
    //     //     if (!answer || answer.trim() === '') throw new Error('Answer can not be empty')
    //     //     response[attendeeName] = answer;
    //     //
    //     // } else if (company === 'gov'){
    //     //     response[attendeeName] = 'Awaiting response'
    //     //     console.log(`Email sent to ${attendeeName}`);
    //     // } else {
    //     //     response[attendeeName] = 'Not required'
    //     // }
    }

    return {
        title,
        attendees,
        date: new Date(),
        completed: false,
        response
    }
}

const event = eventInstance  ({
        title: 'Annual 2015 Inspection',
    attendees: [
        createColleague('Schalk Venter'),
        createColleague("remo van wyk"),
        createInspector('mr big boss'),
        createEmployee('jon Smith', 'wool'),
    ],
}
)

//prosedural programming
//oop
//functional programming
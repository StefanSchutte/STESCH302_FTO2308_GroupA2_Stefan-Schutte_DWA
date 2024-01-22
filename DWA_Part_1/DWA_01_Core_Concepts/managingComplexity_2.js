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

/*
It seems like you're discussing various aspects of code style, readability, and error prevention in the context of revisiting the Mars Climate Orbiter code. Here's a summary of the points you've covered:

1. **Code Style and Styleguides:**
   - Emphasize the importance of code style in improving readability.
   - Mention JavaScript Standard Styleguide and Airbnb Styleguide as popular examples.

2. **Variable and Function Naming:**
   - Encourage clear and descriptive naming for variables and functions.
   - Suggest using style guides for naming conventions.

3. **Expressive Variable Names:**
   - Use variable names that convey meaning, even if they are longer.
   - Provide examples of using const and let in a clear manner.
   - Consider using different styles for different data types (e.g., isLogged, clickHandler).

4. **Grouping Related Data:**
   - Group related data together using object literals.
   - Illustrate an example of bundling force value and measurement together in an object.

5. **Error Prevention:**
   - Propose creating a function (`calculateThrust`) that takes an object with required properties.
   - Use error checks to ensure all necessary properties are present.
   - Demonstrate how to prevent code execution if essential data is missing or incorrect.

6. **Global Constants:**
   - Introduce the concept of global constants and suggest using uppercase snake case for naming.

7. **Documentation and Comments:**
   - Emphasize the use of comments and documentation to enhance code clarity.
   - Showcase the use of JSDoc comments to describe the purpose and parameters of a function.
   - Use comments to provide additional context about the code and its expected behavior.

8. **Data Validation:**
   - Show examples of checking data types (e.g., ensuring time is a number) to prevent unexpected issues.

9. **Self-Documenting Code:**
   - Highlight the importance of writing code that is self-documenting.
   - Use literal values and clear variable names to make the code easy to understand.

10. **Interactive Examples:**
    - Provide interactive examples of running and testing code to demonstrate error prevention and data validation.

Overall, the discussion covers a comprehensive set of practices for writing clean, readable, and error-resistant code.

Certainly! Here's a summary in bullet points:

- **Code Style:**
  - Follow common conventions and style guides for JavaScript.
  - Consider factors like indentation, line breaks, and bracket usage.

- **Documentation with JSDoc:**
  - Use JSDoc comments to describe the purpose, types, and shapes of functions and objects.
  - Enhance readability by providing information on expected input and output.

- **Modularity:**
  - Encapsulate related code into functions or objects.
  - Make code modular for easy reuse and maintenance.

- **Abstraction:**
  - Hide internal details of functions or modules from users.
  - Provide clear interfaces and documentation for ease of use.
  - Keep unnecessary details hidden to manage complexity.

- **Complexity Causes:**
  - Acknowledge that programming inherently involves complexity.
  - Deal with evolving requirements, technical debt, and scaling challenges.
  - Manage technical debt to prevent it from hindering future development.

- **Code Changes and Maintenance:**
  - Recognize that code is dynamic and requires ongoing changes.
  - Regularly maintain and refactor code for readability, performance, and bug prevention.

- **Programming Paradigms:**
  - Explore programming paradigms like object-oriented programming (OOP) and functional programming (FP) to manage complexity.

- **Future Topics:**
  - Expect discussions on frameworks like Angular, React, and others.
  - Understand how these frameworks leverage principles like modularity and abstraction.

- **JavaScript Challenges:**
  - Acknowledge that JavaScript can be challenging compared to other languages.
  - Upcoming lessons will delve into the specifics of JavaScript and its complexities.

Feel free to ask if you have further questions or if there's anything specific you'd like to explore!
 */
/*


//Singleton pattern

/**
 * Implements Singleton pattern of company
 */
/*
class Company {
  name = 'Acme Inc.'
  founded = 2007
  ceo = 'Mr. Acme'
  static constructed = false

  constructor(){
    if (this.constructed){
      throw new Error('Instance already exist')
    }
    constructed = true
  }
}
replaceCeo (newName){
  console.log(`Goodbye ${this.ceo}`)
  this.ceo = newName
}

const company = new Company()

const fake = new Company()
fake.replaceCeo()

export { company }
export default company

//idiomatic
const company2 = {
  name = 'Acme Inc.'
  founded = 2007
  ceo = 'Mr. Acme'

  replaceCeo(newName) {
    console.log(`Goodbye ${this.ceo}`)
    this.ceo = newName
  }
}
export {company2}
export default company2

export const name = 'Acme Inc.'
export const founded = 2007
export const ceo = 'Mr. Acme'

export const replaceCeo3(newName) {
    console.log(`Goodbye ${this.ceo}`)
    this.ceo = newName

}
*/

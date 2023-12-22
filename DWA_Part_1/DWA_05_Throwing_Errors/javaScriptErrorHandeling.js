try{
    let age = prompt("Enter your age:");

    if (age == '') throw "You didn't enter anything.";
    if (isNaN(age)) throw age + " is not a number.";
    if (age < 18) throw "You need to be 18+ to sign up."

    console.log("you are now signed up")
}
catch(error){
    console.log(error)
}
finally {
    console.log('Thanks')
}
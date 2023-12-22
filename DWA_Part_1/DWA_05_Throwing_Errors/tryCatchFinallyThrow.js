try {
    console.log('start of try runs');
    unicycle;//err
    console.log('End of try runs - never reached');
} catch(err){
    console.log('Error has occured: ' + err.stack);
} finally {
    console.log('this is always run');
}
console.log('then execution continues');

let json = '{"age": 30}';
try{
    let user = JSON.parse(json);
    if (!user.name){
        throw new SyntaxError('Incomplete data: no name')
    }
    console.log(user.name);
} catch(e){
    console.log("JSON Error:" + e.message);
}
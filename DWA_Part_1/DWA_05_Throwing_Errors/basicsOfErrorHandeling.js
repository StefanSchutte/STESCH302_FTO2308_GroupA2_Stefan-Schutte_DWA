function changeBackgroundColor(element, color){
    element.style.backgroundColor = color;

}

const myBox = document.getElementById('myBox');


try {
    changeBackgroundColor(myBox, "blue");
} catch (e){
    console.dir(e)
    alert('something went wrong')
} finally{
    console.log(20)
}

prompt("What is your name?");
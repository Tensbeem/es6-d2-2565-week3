function sayHello(){
    return "Hello"
}

function greating(sayHello,name){
    return `${sayHello()},${name}`
}

//Call Function
let message = greating(sayHello,"Mark Zakerberg")
console.log(message)
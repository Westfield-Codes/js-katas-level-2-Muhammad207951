
function main(){ 
    let operation = prompt ("What operation do you want? (+, -, *, /)" );
    let a = parseInt(prompt("Add your fist Number"));
    let b = parseInt(prompt("Enter Your Second Number"));

    switch (operation) {
    case "+":
        result= add(a,b);
        break;
    case "-":
        result= subtract(a,b);
        break;
    case "*":
        result= multiply(a,b);
        break;
    case "/":
        result= divide(a,b);
        break;

}

 alert (a + operation + b + "=" + result );
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

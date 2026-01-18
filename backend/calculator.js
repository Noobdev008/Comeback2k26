// make a basic calculator 

function calculator(a,operators,b){
    if(operators==="+"){
        console.log(a+b);      
    }
    else if(operators==="-"){
        console.log(a-b);      
    }
    else if(operators==="/"){
        console.log(a/b);      
    }
      else if(operators==="%"){
        console.log(a%b);      
    }
      else if(operators==="*"){
        console.log(a*b);      
    }
    else if(operators==="**"){
        console.log(a**b);      
    }else{
        console.log("error")
    }
}

// calculator(10,"%",3)

function calculatorViaSwitch(a, operator, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid input";
    }

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero";
        case "%":
            return a % b;
        case "**":
            return a ** b;
        default:
            return "Invalid operator";
    }
}

// console.log(calculatorViaSwitch(10, "%", 3));

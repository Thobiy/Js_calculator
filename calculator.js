var FirstNumber = parseFloat(prompt("Enter first number: "));
var SecondNumber = parseFloat(prompt("Enter second number: "));
const operator = prompt("Enter operator to perform calculation (+, -, * or / ):");


        var Ans;
if(operator == "+"){
    Ans = FirstNumber + SecondNumber;}
    else if(operator == "-"){
        Ans = FirstNumber - SecondNumber;}
    else if(operator == "*"){
        Ans = FirstNumber * SecondNumber;}
    else if(operator == "/"){
        Ans = FirstNumber / SecondNumber;}
    else
        {Invalid;}

        window.alert(FirstNumber  +  operator  + SecondNumber + "\nAns is: " + Ans);
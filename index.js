let sign;
let input;
let input1;
let input2;
let displays;
//display represents the number that is being displayed
let display,display1,display2,answer;
function displayNumbers(number) {
    document.getElementById("mainDisplay").innerHTML+=number;
    display=Number(document.getElementById("mainDisplay").innerHTML);
    if (sign) {
        display2=display;
    }
    else{
        display1=display;
    }
    
}
function operator(operators) {
if (display1 && sign ) {
    equal()
    document.getElementById("secondaryDisplay").innerHTML='';
    document.getElementById("mainDisplay").innerHTML=(answer);
    console.log(answer);
}
    sign=operators
    input1=Number(document.getElementById("mainDisplay").innerHTML);
    document.getElementById("secondaryDisplay").innerHTML+=(input1+sign);
    if (operators){
        document.getElementById("mainDisplay").innerHTML='';
    }
}



function calculateResults(calculate) {
    input=Number(document.getElementById("mainDisplay").innerHTML);
    document.getElementById("secondaryDisplay").innerHTML+=(input+calculate);

    if (sign=='+'){
        answer=display1+display2
       Number( document.getElementById("mainDisplay").innerHTML=answer);
  
    }
    else if (sign=='-'){
        answer=display1-display2
        document.getElementById("mainDisplay").innerHTML=(answer);
    }
   else if (sign=='*'){
        answer=display1*display2
        document.getElementById("mainDisplay").innerHTML=(answer);
    }
    else if (sign=='/'){
        answer=display1/display2
        document.getElementById("mainDisplay").innerHTML=(answer);
    }

}

//the C button
function clearAll() {
    display1='';
    display2='';
    answer='';
    sign='';
   document.getElementById("mainDisplay").innerHTML='';
   document.getElementById("secondaryDisplay").innerHTML='';
}

// the CE button
function clearDisplay() {
   document.getElementById("mainDispaly").innerHTML='';
}

//fa fa-delete button
function deleteButton() {
    displays=document.getElementById("mainDisplay").innerHTML;
    edit=displays.slice(0,-1)
    document.getElementById("mainDisplay").innerHTML=edit;
}

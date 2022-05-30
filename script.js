let firstInput = []         // first input array
let secondInput = []  // second input array
let operatorInput = [] // operator input array

let inputScreen = document.querySelector("#first__input") // first input screen
let operatorScreen = document.querySelector("#operator__input") // operator screen
let resultScreen = document.querySelector("#second__input") // second input screen


 //-----------------------------------------------------

//
 //-----------------------------------------------------


function renderZero () {
    firstInput.push(0)
    inputScreen.textContent =    firstInput.join("")
 }
 

function renderOne () {
    firstInput.push(1)
    inputScreen.textContent =    firstInput.join("")
 }
 
 function renderTwo () {
    firstInput.push(2)
    inputScreen.textContent =    firstInput.join("")
 }
 
 function renderThree () {
    firstInput.push(3)
    inputScreen.textContent =    firstInput.join("")
 }
 
 function renderFour () {
     
    firstInput.push(4)
    inputScreen.textContent =    firstInput.join("")
    
 }

 function renderFive () {
    firstInput.push(5)
    inputScreen.textContent =    firstInput.join("")
 }
 
 function renderSix () {
    firstInput.push(6)
    inputScreen.textContent =    firstInput.join("")
 }
 
 function renderSeven () {
    firstInput.push(7)
    inputScreen.textContent =    firstInput.join("")
 }
 
 function renderEight () {
     
    firstInput.push(8)
    inputScreen.textContent =    firstInput.join("")
    
 }

 function renderNine () {
     
    firstInput.push(9)
    inputScreen.textContent =    firstInput.join("")
    
 }

 //-----------------------------------------------------

//
 //-----------------------------------------------------

 function renderPlus () {
     
    secondInput.push(inputScreen.textContent) // adds the current input to the second input array

inputScreen.textContent = ""    // clears the input screen

firstInput = []     // clears the first input array

    operatorInput.push("+")
    operatorScreen.textContent =    operatorInput.join("")
    operatorInput.pop()


 }





 function renderMinus () {


   secondInput.push(inputScreen.textContent) // adds the current input to the second input array

   inputScreen.textContent = ""    // clears the input screen
   
   firstInput = []     // clears the first input array
   
       operatorInput.push("-")
       operatorScreen.textContent =    operatorInput.join("")
       operatorInput.pop()

   
    }
   




 


 function renderDivide () {
     
    operatorInput.push("/")
    operatorScreen.textContent =    operatorInput.join("")
    
 }


 function renderDot () {
     
    operatorInput.push(".")
    operatorScreen.textContent =    operatorInput.join("")
    
 }


    function renderMultiply () {

        operatorInput.push("*")     
        operatorScreen.textContent =    operatorInput.join("")
    }


    function renderClear () {

        operatorInput.push(" ")     
        inputScreen.textContent =  operatorInput.join("")
        operatorScreen.textContent = ""
        operatorInput = []
        firstInput = []

    }

    function renderDelete () {

    let deleteLast =   inputScreen.textContent
    inputScreen.textContent = deleteLast.slice(0, -1)
    firstInput.splice(-1, 1)
    operatorInput.splice(-1, 1)

    }





let firstInput = []         // first input array
let secondInput = []  // second input array
let operatorInput = [""] // operator input array

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

 function renderDot () {
     
   firstInput.push(".")
   inputScreen.textContent =    firstInput.join("")
   
}

 //-----------------------------------------------------

//
 //-----------------------------------------------------

 function renderPlus () {


    secondInput.push(inputScreen.textContent) // adds the current input to the second input array

   inputScreen.textContent = ""    // clears the input screen

   firstInput = []     // clears the first input array

    operatorInput.unshift("+")
    operatorScreen.textContent =  operatorInput[0]


 }


 function renderMinus () {

   secondInput.push(inputScreen.textContent) // adds the current input to the second input array

   inputScreen.textContent = ""    // clears the input screen

   firstInput = []     // clears the first input array

    operatorInput.unshift("-")
    operatorScreen.textContent =  operatorInput[0]


    }
   


 function renderDivide () {
     
   secondInput.push(inputScreen.textContent) // adds the current input to the second input array

   inputScreen.textContent = ""    // clears the input screen

   firstInput = []     // clears the first input array

    operatorInput.unshift("/")
    operatorScreen.textContent =  operatorInput[0]

 }




    function renderMultiply () {

      secondInput.push(inputScreen.textContent) // adds the current input to the second input array

      inputScreen.textContent = ""    // clears the input screen
   
      firstInput = []     // clears the first input array
   
       operatorInput.unshift("x")
       operatorScreen.textContent =  operatorInput[0]
   
    }


    function renderClear () {

        operatorInput.push(" ")     
        inputScreen.textContent =  operatorInput.join("")
        operatorScreen.textContent = ""
        operatorInput = []
        firstInput = []
        secondInput = []


    }


    function renderIsEqual () {


      if (operatorInput[0] === "+") {
         secondInput.push(inputScreen.textContent)
         inputScreen.textContent = parseInt(secondInput[0])  + parseInt(secondInput[1])
         firstInput = []
         operatorInput = [""]
         secondInput = []
         operatorScreen.textContent = ""
     
      } else if (operatorInput[0] === "-") {
         secondInput.push(inputScreen.textContent)
         inputScreen.textContent = parseInt(secondInput[0])  - parseInt(secondInput[1])
         firstInput = []
         operatorInput = [""]
         secondInput = []
         operatorScreen.textContent = ""
     
      } else if (operatorInput[0] === "x") {
         secondInput.push(inputScreen.textContent)
         inputScreen.textContent = parseInt(secondInput[0]) * parseInt(secondInput[1])
         firstInput = []
         operatorInput = [""]
         secondInput = []
         operatorScreen.textContent = ""
     
      } else if (operatorInput[0] === "/") {
         secondInput.push(inputScreen.textContent)
         inputScreen.textContent = parseInt(secondInput[0]) / parseInt(secondInput[1])
         firstInput = []
         operatorInput = [""]
         secondInput = []
         operatorScreen.textContent = ""
     
      }
  }



    function renderDelete () {

    let deleteLast =   inputScreen.textContent
    inputScreen.textContent = deleteLast.slice(0, -1)
    firstInput.splice(-1, 1)
    operatorInput.splice(-1, 1)

    }





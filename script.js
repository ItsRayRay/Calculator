//===================================================//
//                  Display Calculator
//===================================================//

const resultScreen = document.getElementById("result__screen")
const inputScreen = document.getElementById("input__screen")
let inputNumbers = ""
let outputNumbers = ""

//===================================================//
//               Buttons Clear/Delete
//===================================================//

const clearButton = document.getElementById("div2")
const deleteButton = document.getElementById("div3")

//===================================================//
//              Numeric  Buttons
//===================================================//
const number0Button = document.getElementById("div17")
const number1Button = document.getElementById("div12")
const number2Button = document.getElementById("div13")
const number3Button = document.getElementById("div14")
const number4Button = document.getElementById("div8")
const number5Button = document.getElementById("div9")
const number6Button = document.getElementById("div10")
const number7Button = document.getElementById("div4")
const number8Button = document.getElementById("div5")
const number9Button = document.getElementById("div6")

//===================================================//
//                  Action Buttons 
//===================================================//

const substractBtn = document.getElementById("div15")
const isEqualBtn = document.getElementById("div18")
const plusBtn = document.getElementById("div19")
const dotBtn = document.getElementById("div16")
const multiplyBtn = document.getElementById("div11")
const divideBtn = document.getElementById("div7")

//===================================================//
//          Event listeners for button clicks
//===================================================//


deleteButton.addEventListener("click", function() {
    inputNumbers = 
    resultScreen.textContent = inputNumbers
})

clearButton.addEventListener("click", function() {
    inputNumbers = ""
    resultScreen.textContent = inputNumbers
})

substractBtn.addEventListener("click", function() {
    inputNumbers = "-"
    resultScreen.textContent += inputNumbers
})

isEqualBtn.addEventListener("click", function() {
    inputNumbers = "="
    resultScreen.textContent += inputNumbers
})

plusBtn.addEventListener("click", function() {
    inputNumbers = "+"
    resultScreen.textContent += inputNumbers
})

dotBtn.addEventListener("click", function() {
    inputNumbers = "."
    resultScreen.textContent += inputNumbers
})

multiplyBtn.addEventListener("click", function() {
    inputNumbers = "*"
    resultScreen.textContent += inputNumbers
})

divideBtn.addEventListener("click", function() {
    inputNumbers = "÷"
    resultScreen.textContent += inputNumbers

})

//===================================================//
//          Event listener numbers
//===================================================//

function getNumber() {

number0Button.addEventListener("click", function() {
    inputNumbers = 0
 return   resultScreen.textContent += inputNumbers
})

number1Button.addEventListener("click", function() {
    inputNumbers = 1
    return   resultScreen.textContent += inputNumbers
})

number2Button.addEventListener("click", function() {
    inputNumbers = 2
    return   resultScreen.textContent += inputNumbers
})

number3Button.addEventListener("click", function() {
    inputNumbers = 3
    return    resultScreen.textContent += inputNumbers
})

number4Button.addEventListener("click", function() {
    return 4
})

number5Button.addEventListener("click", function() {
    inputNumbers = 5
    resultScreen.textContent += inputNumbers
})

number6Button.addEventListener("click", function() {
    inputNumbers = 6
    resultScreen.textContent += inputNumbers
})

number7Button.addEventListener("click", function() {
    inputNumbers = 7
    resultScreen.textContent += inputNumbers
})

number8Button.addEventListener("click", function() {
    inputNumbers = 8
   return  inputNumbers += inputNumbers
})


number9Button.addEventListener("click", function() {
    inputNumbers = 9
    return inputNumbers
})

return
}


//===================================================//
//          Event listeners for button clicks
//===================================================//





inputScreen.textContent = getNumber()
resultScreen.textContent = getNumber()
















































































const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const clearButton = document.querySelector('.btn-clear')
const equalsButton = document.querySelector('.btn-equals')
const powerButton = document.querySelector('.btn-power')
//koristime console log vnatre vo funkcii i slicno da vidime dali funkcijata e povikana
//isto taka se koristi console log da se ispecati objekt ili vrednost, za da vidime dali ja ima posakuvanata vrednost
console.log("equalsButton",equalsButton)
const display = document.querySelector('.display')


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('button-value');
    display.textContent += buttonValue
  //  display.textContent = display.textContent + buttonValue   the previous line is a shortcut to this expression
  })
})
powerButton.addEventListener('click', () => {
  console.log("Click")
  display.textContent += '^' + display.textContent + '=' + display.textContent * display.textContent
})



equalsButton.addEventListener('click', () => {
  console.log("Click")
  display.textContent += '=' + eval(display.textContent)
})

clearButton.addEventListener('click', () => {
  display.textContent = ""
})

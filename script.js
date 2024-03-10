
function appendToDisplay(value) {
  document.getElementById('display').textContent += value;
}

function clearDisplay() {
  document.getElementById('display').textContent = '';
}

function calculate() {
  let expression = document.getElementById('display').textContent;
  let result = eval(expression);
  document.getElementById('display').textContent = result;
}

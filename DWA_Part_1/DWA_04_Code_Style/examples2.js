let counterValue = 0;

function increment() {
  counterValue += 1;
  updateCounterDispaly();
}

function decrement() {
  counterValue--;
  updateCounterDisplay();
}
function reset() {
  counterValue = 0;
  updateCounterDisplay();

}

function updateCounterDispaly() {
  document.getElementById('counterValue').innerText = counterValue;
}

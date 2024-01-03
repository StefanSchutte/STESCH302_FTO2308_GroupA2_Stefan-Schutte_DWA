const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

const elements = {
  number: document.querySelector('[data-key="number"]'),
  subtract: document.querySelector('[data-key="subtract"]'),
  add: document.querySelector('[data-key="add"]'),
  reset: document.getElementById('resetButton'),
  settings: document.getElementById('settingsButton'),
  dayOption: document.getElementById('dayOption'),
  nightOption: document.getElementById('nightOption'),
};

const drawer = document.querySelector('.drawer-overview');
const openButton = drawer.nextElementSibling;
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => drawer.show());
closeButton.addEventListener('click', () => drawer.hide());

const updateColor = () => {
  const value = parseInt(elements.number.value);
  const colorStepsAmount = 250 / (MAX_NUMBER - MIN_NUMBER);
  const distMax = MAX_NUMBER - value;
  const distMin = value - MIN_NUMBER;
  const red = distMax * colorStepsAmount;
  const green = distMin * colorStepsAmount;
  elements.number.style.color = `rgb(${red}, ${green} , 0)`;
};

const disableButton = (button, disable) => {
  button.disabled = disable;
};

const subtractHandler = () => {
  const newValue = parseInt(elements.number.value) - STEP_AMOUNT;
  elements.number.value = newValue;
  disableButton(elements.add, false);
  disableButton(elements.subtract, newValue <= MIN_NUMBER);
  updateColor();
};

const addHandler = () => {
  const newValue = parseInt(elements.number.value) + STEP_AMOUNT;
  elements.number.value = newValue;
  disableButton(elements.subtract, false);
  disableButton(elements.add, newValue >= MAX_NUMBER);
  updateColor();
};

const resetHandler = () => {
  elements.number.value = 0;
  updateColor();
  alert('Counter has been reset!');
};

const toggleDayNightMode = (isNightMode) => {
  document.documentElement.classList.toggle('sl-theme-dark', isNightMode);
};

elements.subtract.addEventListener('click', subtractHandler);
elements.add.addEventListener('click', addHandler);
elements.reset.addEventListener('click', resetHandler);

elements.dayOption.addEventListener('click', () => toggleDayNightMode(false));
elements.nightOption.addEventListener('click', () => toggleDayNightMode(true));

// Set initial theme based on the system preference
const isNightModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
toggleDayNightMode(isNightModePreferred);


updateColor();
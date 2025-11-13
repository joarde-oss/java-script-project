document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "counter-value";
  const app = document.querySelector("[data-counter-app]");
  const valueDisplay = app?.querySelector("[data-counter-value]");
  const decrementBtn = app?.querySelector("[data-counter-decrement]");
  const incrementBtn = app?.querySelector("[data-counter-increment]");
  const resetBtn = app?.querySelector("[data-counter-reset]");

  if (!app || !valueDisplay || !decrementBtn || !incrementBtn || !resetBtn) {
    return;
  }

  const loadValue = () => {
    const stored = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(stored) ? stored : 0;
  };

  const saveValue = (value) => {
    localStorage.setItem(STORAGE_KEY, String(value));
  };

  let counter = loadValue();

  const updateDisplay = () => {
    valueDisplay.value = counter;
    valueDisplay.textContent = counter;
    saveValue(counter);
  };

  const changeCounter = (delta) => {
    counter += delta;
    updateDisplay();
  };

  decrementBtn.addEventListener("click", () => changeCounter(-1));
  incrementBtn.addEventListener("click", () => changeCounter(1));
  resetBtn.addEventListener("click", () => {
    counter = 0;
    updateDisplay();
  });

  updateDisplay();
});

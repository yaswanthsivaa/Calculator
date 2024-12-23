let display = document.getElementById("display");

function appendValue(value) {
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = "";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch {
    display.innerText = "Error";
  }
}

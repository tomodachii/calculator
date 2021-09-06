let history = document.getElementById("history-value");
let output = document.getElementById("output-value");
let expression = "";
let flag = 0;

function clear() {
  expression = "";
  setHistory("");
  setOutput("");
  flag = 0;
}

function setHistory(expression) {
  history.innerHTML = expression;
}

function setOutput(numStr) {
  if (numStr == "") {
    output.innerHTML = numStr;
  } else {
    output.innerHTML = Number(numStr).toLocaleString("fi-FI");
  }
}

window.onload = () => {
  document.querySelectorAll(".number").forEach((item) => {
    item.addEventListener("click", (eventObj) => {
      if (flag) {
        clear();
      }
      expression += eventObj.target.id;
      setHistory(expression);
    });
  });

  document.querySelectorAll(".operator").forEach((item) => {
    item.addEventListener("click", (eventObj) => {
      switch (eventObj.target.id) {
        case "clear":
          clear();
          break;
        case "backspace":
          setOutput("");
          expression = history.innerHTML.substr(
            0,
            history.innerHTML.length - 1
          );
          setHistory(expression);
          break;
        case "=":
          output.innerHTML = eval(expression);
          flag = 1;
          break;
        default:
          if (flag) {
            clear();
          }
          expression += eventObj.target.id;
          setHistory(expression);
      }
    });
  });
};

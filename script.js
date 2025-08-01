let container = document.querySelector(".container");
let btnCont = document.createElement("div");
let adjBtn = document.createElement("button");
let darkenMode = document.createElement("button");
let randomMode = document.createElement("button");
let resetBtn = document.createElement("button");
let mode = "random";

darkenMode.textContent = "Darken Mode";
adjBtn.textContent = "Adjust Size";
randomMode.textContent = "Random Color Mode";
resetBtn.textContent = "Reset Color";
document.body.prepend(btnCont);
btnCont.appendChild(darkenMode);
btnCont.appendChild(adjBtn);
btnCont.appendChild(randomMode);
btnCont.appendChild(resetBtn);

let compStyles = getComputedStyle(container);
let contWidth = compStyles.width;
let contHeight = compStyles.height;

for (let i = 0; i < 256; i++) {
  let gridElement = document.createElement("div");
  gridElement.classList.add("element");
  console.log(contWidth);

  gridElement.style.width = `${
    contWidth.slice(0, contWidth.length - 2) / 16
  }px`;

  gridElement.style.height = `${
    contHeight.slice(0, contHeight.length - 2) / 16
  }px`;

  container.appendChild(gridElement);
}

adjBtn.setAttribute("onclick", "resetSquares()");
resetBtn.setAttribute("onclick", "resetColors()");
randomMode.setAttribute("onclick", "switchMode()");
darkenMode.setAttribute("onclick", "switchMode()");
randomMode.toggleAttribute("disabled", true);

function resetSquares() {
  let amount = prompt("How many squares do you want per side?", "16");

  if (amount == null) {
    return alert("Cancelled.");
  }

  if (isNaN(+amount)) {
    return alert("Please enter a valid number under 100.");
  }

  if (+amount >= 100) {
    return alert(
      "Too many squares! Please select less than 100 squares per side."
    );
  }
  container.innerHTML = "";

  for (let i = 0; i < amount * amount; i++) {
    let gridElement = document.createElement("div");
    gridElement.classList.add("element");
    gridElement.style.width = `${
      contWidth.slice(0, contWidth.length - 2) / amount
    }px`;

    gridElement.style.height = `${
      contHeight.slice(0, contHeight.length - 2) / amount
    }px`;

    container.appendChild(gridElement);
  }

  addColorOnHover();
}

function addColorOnHover() {
  let gridElements = document.querySelectorAll(".element");
  if (mode === "random") {
    gridElements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        let randomColor1 = Math.floor(Math.random() * 255) + 1;
        let randomColor2 = Math.floor(Math.random() * 255) + 1;
        let randomColor3 = Math.floor(Math.random() * 255) + 1;
        element.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
      });
    });
  }

  if (mode === "darken") {
    gridElements.forEach((element) => {
      let opacity = 0;
      element.addEventListener("mouseover", () => {
        element.style.backgroundColor = `rgb(0, 0, 0, ${(opacity += 0.1)})`;
      });
    });
  }
}

function resetColors() {
  let gridElements = document.querySelectorAll(".element");
  gridElements.forEach((element) => {
    element.style.backgroundColor = "rgba(0, 0, 0, 0)";
  });
}

function switchMode() {
  if (mode == "random") {
    mode = "darken";
    randomMode.toggleAttribute("disabled");
    darkenMode.toggleAttribute("disabled");
    resetColors();
    addColorOnHover();
  } else {
    mode = "random";
    randomMode.toggleAttribute("disabled");
    darkenMode.toggleAttribute("disabled");
    resetColors();
    addColorOnHover();
  }
}

addColorOnHover();

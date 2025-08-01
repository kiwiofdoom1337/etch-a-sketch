let container = document.querySelector(".container");
let resetBtn = document.createElement("button");
resetBtn.classList.add("reset-btn");
resetBtn.textContent = "Reset Squares";
document.body.prepend(resetBtn);

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

resetBtn.setAttribute("onclick", "resetSquares()");

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

  gridElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      let randomColor1 = Math.floor(Math.random() * 255) + 1;
      let randomColor2 = Math.floor(Math.random() * 255) + 1;
      let randomColor3 = Math.floor(Math.random() * 255) + 1;
      element.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    });
  });
}

addColorOnHover();

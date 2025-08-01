let container = document.querySelector(".container");
let resetBtn = document.createElement("button");
resetBtn.classList.add("reset-btn");
resetBtn.textContent = "Reset Squares";
document.body.prepend(resetBtn);

for (let i = 0; i < 256; i++) {
  let gridElement = document.createElement("div");
  gridElement.classList.add("element");

  container.appendChild(gridElement);
}

resetBtn.setAttribute("onclick", "resetSquares()");

function resetSquares() {
  let amount = +prompt("How many squares do you want per side?", "16");
  if (amount >= 100) {
    return alert(
      "Too many squares! Please select less than 100 squares per side."
    );
  }
  let compStyles = getComputedStyle(container);
  let contWidth = compStyles.width;
  let contHeight = compStyles.height;

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
      element.style.backgroundColor = "yellow";
    });
  });
}

addColorOnHover();

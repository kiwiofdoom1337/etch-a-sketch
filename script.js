let container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let gridElement = document.createElement("div");
  gridElement.classList.add("element");

  container.appendChild(gridElement);
}

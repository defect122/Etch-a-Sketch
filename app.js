function createGrid() {
  const grid = document.querySelector(".grid-container");
  const columns = 16;
  const rows = 16;

  for (let i = 0; i < columns * rows; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.style.minHeight = "1rem";
    gridSquare.style.minWidth = "1rem";
    // gridSquare.style.backgroundColor = "black";
    gridSquare.style.border = "1px solid black";
    grid.appendChild(gridSquare);
  }
}

function mouseHoverOverGrid() {
  const grid = document.querySelector(".grid-container");
  const gridSquare = document.querySelectorAll("div .grid-square");
  gridSquare.forEach(function (element) {
    element.addEventListener("mouseenter", (event) => {
      const randomRed = Math.floor(Math.random() * 257);
      const randomGreen = Math.floor(Math.random() * 257);
      const randomBlue = Math.floor(Math.random() * 257);
      element.style.backgroundColor =
        "rgb(" + [randomRed, randomGreen, randomBlue].join(",") + ")";

      console.log("white");
    });
  });
}

createGrid();
mouseHoverOverGrid();

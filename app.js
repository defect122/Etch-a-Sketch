function createGrid(gridSize) {
  const grid = document.querySelector(".grid-container");

  grid.replaceChildren();

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    grid.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
    grid.style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
    gridSquare.classList.add("grid-square");
    gridSquare.style.border = "1px solid black";
    grid.appendChild(gridSquare);
  }

  mouseHoverOverGrid();
}

function mouseHoverOverGrid() {
  const gridSquare = document.querySelectorAll("div .grid-square");
  gridSquare.forEach(function (element) {
    element.addEventListener("mouseenter", (event) => {
      const randomRed = Math.floor(Math.random() * 257);
      const randomGreen = Math.floor(Math.random() * 257);
      const randomBlue = Math.floor(Math.random() * 257);
      element.style.backgroundColor =
        "rgb(" + [randomRed, randomGreen, randomBlue].join(",") + ")";
      let currentBrightness = element.dataset.brightness || 100;
      currentBrightness = parseInt(currentBrightness) - 10;
      console.log(currentBrightness);
      if (currentBrightness >= 0) {
        element.style.filter = `brightness(${currentBrightness}%)`;
        element.dataset.brightness = currentBrightness;
        console.log(element.dataset.brightness);
      }
    });
  });
}

function generateNewGrid() {
  const generateButton = document.querySelector(".generate");

  generateButton.addEventListener("click", (event) => {
    let gridSize = prompt("Number of Squares Per Side");

    // Guarding the input of the gridSize
    while (
      gridSize === null ||
      gridSize > 100 ||
      gridSize < 1 ||
      !Number.isInteger(+gridSize) //Using + infront of the parameter, changes it from a string input to a integer
    ) {
      gridSize = prompt("Must be a valid integer value between 1-100");
    }

    createGrid(gridSize);
  });
}

createGrid(16);
generateNewGrid();

function createGrid() {
  const gridContainer = document.querySelector(".grid-container");
  const columns = 16;
  const rows = 16;

  for (let i = 0; i < columns * rows; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.style.minHeight = "1rem";
    gridSquare.style.minWidth = "1rem";
    // gridSquare.style.backgroundColor = "black";
    gridSquare.style.border = "1px solid black";
    gridContainer.appendChild(gridSquare);
  }
}

createGrid();

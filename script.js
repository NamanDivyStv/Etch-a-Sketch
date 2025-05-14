const container = document.querySelector(".container");
let i, j;
const button = document.querySelector(".btn");


createGrid(16);

function createGrid(size) {
    container.innerHTML="";
  for (i = 0; i < size; i++) {
    
    const rows = document.createElement("div");
    rows.classList.add("rows");
    for (j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      rows.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
      });
      
cell.style.minWidth = (93.65/size)+"vw";
cell.style.minHeight = (84/size)+"vh";
cell.style.maxWidth = (93.65/size)+"vw";
cell.style.maxHeight = (84/size)+"vh";
    }
    container.appendChild(rows);
  }
}



let size=16;


button.addEventListener("click",() => {
    size=prompt("Enter the size of the grid");

    createGrid(parseInt(size));
});

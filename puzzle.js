var rows = 3;
var columns = 3;

var currTile; // aktualnie przeciągany kafelek
var otherTile; // kafelek, z którym aktualnie zamieniamy miejsca

window.onload = function() { // Tworzenie planszy z 9 kafelkami
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "tlo.jpg";

			// dodanie obsługi zdarzeń przeciągania i upuszczania elementów
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd); 

            document.getElementById("board").append(tile); // Dodanie kafelka do planszy
        }
    }

    let pieces = [];
	// Stworzenie listy numerów kafelków do ułożenia
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString());
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = pieces[i] + ".jpg";
		
		// Dodanie event listener dla każdego kafelka do ułożenia
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);

        document.getElementById("pieces").append(tile);
    }
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (currTile.src.includes("tlo")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

	// sprawdzenie, czy puzzle zostały ułożone poprawnie
    if (checkWin()) {
      let pieces = document.getElementById("pieces").children;
    }
}

function checkWin() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let index = r * columns + c;
      
      let imageName = (index + 1) + ".jpg";
      let correctImageName = (r * columns + c + 1) + ".jpg";
      
      if (document.getElementById("board").children[index].src.includes(correctImageName) == false) {
        return false;
      }
    }
  }
  
  alert("Gratulacje, udało Ci się ułożyć puzzle!");
  return true;
}
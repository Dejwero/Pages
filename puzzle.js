var wiersze = 3;
var kolumny = 3;

var aktualny_kafelek; // aktualnie przeciągany kafelek
var inny_kafelek; // kafelek, z którym aktualnie zamieniamy miejsca

window.onload = function() { // Tworzenie planszy z 9 kafelkami
    for (let r = 0; r < wiersze; r++) {
        for (let c = 0; c < kolumny; c++) {
            let kafelek = document.createElement("img");
            kafelek.src = "tlo.jpg";

			// dodanie obsługi zdarzeń przeciągania i upuszczania elementów
            kafelek.addEventListener("dragstart", dragStart);
            kafelek.addEventListener("dragover", dragOver);
            kafelek.addEventListener("dragenter", dragEnter);
            kafelek.addEventListener("dragleave", dragLeave);
            kafelek.addEventListener("drop", dragDrop);
            kafelek.addEventListener("dragend", dragEnd); 

            document.getElementById("board").append(kafelek); // Dodanie kafelka do planszy
        }
    }

    let elementy = [];
	// Stworzenie listy numerów kafelków do ułożenia
    for (let i=1; i <= wiersze*kolumny; i++) {
        elementy.push(i.toString());
    }
    elementy.reverse();
    for (let i =0; i < elementy.length; i++) {
        let j = Math.floor(Math.random() * elementy.length);

        let tmp = elementy[i];
        elementy[i] = elementy[j];
        elementy[j] = tmp;
    }

    for (let i = 0; i < elementy.length; i++) {
        let kafelek = document.createElement("img");
        kafelek.src = elementy[i] + ".jpg";
		
		// Dodanie event listener dla każdego kafelka do ułożenia
        kafelek.addEventListener("dragstart", dragStart);
        kafelek.addEventListener("dragover", dragOver);
        kafelek.addEventListener("dragenter", dragEnter);
        kafelek.addEventListener("dragleave", dragLeave);
        kafelek.addEventListener("drop", dragDrop);
        kafelek.addEventListener("dragend", dragEnd);

        document.getElementById("elementy").append(kafelek);
    }
}

function dragStart() {
    aktualny_kafelek = this;
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
    inny_kafelek = this;
}

function dragEnd() {
    if (aktualny_kafelek.src.includes("tlo")) {
        return;
    }
    let aktualny_Img = aktualny_kafelek.src;
    let inny_Img = inny_kafelek.src;
    aktualny_kafelek.src = inny_Img;
    inny_kafelek.src = aktualny_Img;

	// sprawdzenie, czy puzzle zostały ułożone poprawnie
    if (checkWin()) {
		alert("Gratulacje, udało Ci się ułożyć puzzle!");
    }
}

function checkWin() {
	for (let r = 0; r < wiersze; r++) {
		for (let c = 0; c < kolumny; c++) {
			let index = r * kolumny + c;
      
			let imageName = (index + 1) + ".jpg";
			let poprawny_imageName = (r * kolumny + c + 1) + ".jpg";
      
			if (document.getElementById("board").children[index].src.includes(poprawny_imageName) == false) {
			return false;
			}
		}
	}
	return true;
}

// Znajdź wszystkie linki nawigacyjne
const navLinks = document.querySelectorAll("nav a");

// Dodaj obsługę zdarzenia click dla każdego linka nawigacyjnego
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Zatrzymaj domyślne zachowanie kliknięcia linka
    const targetId = link.getAttribute("href"); // Pobierz ID docelowej sekcji z atrybutu href
    const targetSection = document.querySelector(targetId); // Znajdź docelową sekcję na podstawie ID

    // Przewiń do docelowej sekcji z płynnością
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

function toggleDescription(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle("section-expanded");
  const planetImage = section.querySelector(".planet-image");
  const planetModel = section.querySelector(".planet-model");

  if (section.classList.contains("section-expanded")) {
    planetImage.style.display = "none";
    planetModel.style.display = "block";
  } else {
    planetImage.style.display = "block";
    planetModel.style.display = "none";
  }
}

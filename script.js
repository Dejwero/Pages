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

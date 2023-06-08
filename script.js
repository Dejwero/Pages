function toggleDescription(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle("section-expanded");
  const planetImage = section.querySelector(".planet-image");
  const planetModel = section.querySelector(".planet-model");
  const moreDescription = section.querySelectorAll(".more-description");

  const readMoreButton = section.querySelector(".read-more-button");
  if (section.classList.contains("section-expanded")) {
    planetImage.style.display = "none";
    planetModel.style.display = "block";
    moreDescription.forEach((description) => {
      description.style.display = "block";
    });
    document.querySelector(".container").classList.add("no-scroll");
    readMoreButton.textContent = "Powrót";
  } else {
    planetImage.style.display = "block";
    planetModel.style.display = "none";
    moreDescription.forEach((description) => {
      description.style.display = "none";
    });
    document.querySelector(".container").classList.remove("no-scroll");
    readMoreButton.textContent = "Wyświetl więcej informacji";
  }
}

function navigation(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  const currentSection = document.querySelector(".section-expanded");

  if (currentSection) {
    const currentSectionId = currentSection.id;
    toggleDescription(currentSectionId);
  }
}

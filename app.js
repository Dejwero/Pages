const toggleBtn = document.getElementById('toggle-btn');
  const additionalText = document.getElementById('additional-text');

  toggleBtn.addEventListener('click', function() {
    if (additionalText.style.display === 'none') {
      additionalText.style.display = 'block';
      toggleBtn.innerText = 'Czytaj mniej';
    } else {
      additionalText.style.display = 'none';
      toggleBtn.innerText = 'Czytaj więcej';
    }
  });
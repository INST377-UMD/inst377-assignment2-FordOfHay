async function loadDogImages() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await res.json();
  const carousel = document.getElementById('carousel');
  carousel.innerHTML = data.message.map(img => `<img src="${img}" width="300" height="200">`).join('');

  // Initialize simple-slider (assumes script is included in dogs.html)
  if (window.slider) window.slider.destroy(); // reset if reloading
  window.slider = new SimpleSlider('#carousel', {
    autoplay: true,
    interval: 3000
  });
}

// Load dog breeds and create buttons dynamically
async function loadDogBreeds() {
  const res = await fetch('https://dogapi.dog/api/v2/breeds');
  const data = await res.json();
  const btnContainer = document.getElementById('breedButtons');

  data.data.forEach(breed => {
    const btn = document.createElement('button');
    btn.textContent = breed.attributes.name;
    btn.className = 'custom-btn';
    btn.onclick = () => loadBreedInfo(breed.attributes.name);
    btnContainer.appendChild(btn);
  });
}

// Show breed info when a button is clicked or voice command is used
async function loadBreedInfo(breedName) {
  const res = await fetch('https://dogapi.dog/api/v2/breeds');
  const data = await res.json();
  const breed = data.data.find(b => b.attributes.name.toLowerCase() === breedName.toLowerCase());

  const info = document.getElementById('breedInfo');

  if (!breed) {
    info.style.display = 'block';
    info.innerHTML = `<p>Sorry, we couldn't find information for "${breedName}".</p>`;
    return;
  }

  const attr = breed.attributes;
  info.style.display = 'block';
  info.innerHTML = `
    <h3>${attr.name}</h3>
    <p>${attr.description}</p>
    <p><strong>Min Life:</strong> ${attr.min_life} years</p>
    <p><strong>Max Life:</strong> ${attr.max_life} years</p>
  `;
}

// Initialize everything when the page loads
window.onload = () => {
  loadDogImages();
  loadDogBreeds();
};
  
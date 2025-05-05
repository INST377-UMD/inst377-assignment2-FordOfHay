// scripts/dogs.js
async function loadDogImages() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
    const data = await res.json();
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = data.message.map(img => `<img src="${img}" width="200">`).join('');
  }
  
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
  
  async function loadBreedInfo(breedName) {
    const res = await fetch('https://dogapi.dog/api/v2/breeds');
    const data = await res.json();
    const breed = data.data.find(b => b.attributes.name.toLowerCase() === breedName.toLowerCase());
    if (!breed) return;
    const info = document.getElementById('breedInfo');
    info.innerHTML = `<h3>${breed.attributes.name}</h3><p>${breed.attributes.description}</p><p>Min Life: ${breed.attributes.min_life} years</p><p>Max Life: ${breed.attributes.max_life} years</p>`;
  }
  
  window.onload = () => {
    if (location.pathname.includes('dogs')) {
      loadDogImages();
      loadDogBreeds();
    }
  };
  
async function loadDogImages() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await res.json();

  const carousel = document.getElementById('carousel');
  carousel.innerHTML = data.message.map(img => `<img src="${img}" width="300" height="200">`).join('');

  // Initialize simple slider
  if (window.slider) slider.destroy();
  window.slider = new SimpleSlider('#carousel', { autoplay: true, interval: 3000 });
}

async function loadDogBreeds() {
  const res = await fetch('https://dogapi.dog/api/v2/breeds');
  const data = await res.json();
  const btnContainer = document.getElementById('breedButtons');

  data.data.forEach(breed => {
    const btn = document.createElement('button');
    btn.textContent = breed.attributes.name;
    btn.setAttribute('class', 'custom-btn');
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
  info.style.display = 'block'; // Show container on click
  info.innerHTML = `
    <h3>${breed.attributes.name}</h3>
    <p>${breed.attributes.description}</p>
    <p><strong>Min Life:</strong> ${breed.attributes.min_life} years</p>
    <p><strong>Max Life:</strong> ${breed.attributes.max_life} years</p>
  `;
}

// Voice command integration (basic)
function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return alert('SpeechRecognition not supported');

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;

  recognition.onresult = async function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    const loadMatch = transcript.match(/load dog breed (.+)/);
    if (loadMatch) {
      const breedName = loadMatch[1];
      loadBreedInfo(breedName);
    }
  };

  recognition.start();
}

window.onload = () => {
  if (location.pathname.includes('dogs')) {
    loadDogImages();
    loadDogBreeds();
    startVoiceRecognition();
  }
};
  
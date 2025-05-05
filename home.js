// scripts/home.js
fetch('https://zenquotes.io/api/random')
  .then(res => res.json())
  .then(data => {
    document.getElementById('quote').innerText = data[0].q + ' - ' + data[0].a;
  });
// scripts/home.js

fetch('https://zenquotes.io/api/random')
  .then(res => res.json())
  .then(data => {
    document.getElementById('quote').innerText = `${data[0].q} — ${data[0].a}`;
  })
  .catch(err => {
    document.getElementById('quote').innerText = "Could not load quote.";
    console.error(err);
  });

  function startAnnyang() {
    if (annyang) {
      const commands = {
        'hello': () => alert('Hello World'),
        'change the color to *color': (color) => {
          document.body.style.backgroundColor = color;
        },
        'navigate to *page': (page) => {
          const dest = page.toLowerCase();
          if (dest.includes('home')) window.location.href = 'index.html';
          else if (dest.includes('stock')) window.location.href = 'stocks.html';
          else if (dest.includes('dog')) window.location.href = 'dogs.html';
        }
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }
  
  function stopAnnyang() {
    if (annyang) annyang.abort();
  }
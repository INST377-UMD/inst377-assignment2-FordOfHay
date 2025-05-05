// scripts/voice.js
function startVoice() {
    if (annyang) {
      const commands = {
        'hello': () => alert('Hello World'),
        'change the color to *color': color => document.body.style.backgroundColor = color,
        'navigate to *page': page => window.location.href = page.toLowerCase() + '.html',
        'lookup *ticker': ticker => {
          document.getElementById('stockInput').value = ticker;
          fetchStockData();
        },
        'load dog breed *breed': breed => loadBreedInfo(breed)
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }
  function stopVoice() {
    if (annyang) annyang.abort();
  }
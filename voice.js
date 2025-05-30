// scripts/voice.js

function startVoice() {
    if (annyang) {
      const commands = {
        'hello': () => alert('Hello World'),
  
        'change the color to *color': (color) => {
          document.body.style.backgroundColor = color;
        },
  
        'navigate to *page': (page) => {
          const dest = page.toLowerCase();
          if (dest.includes('home')) window.location.href = 'index.html';
          else if (dest.includes('stocks')) window.location.href = 'stocks.html';
          else if (dest.includes('dogs')) window.location.href = 'dogs.html';
        },
  
        'load dog breed *breed': (breed) => {
          if (typeof loadBreedInfo === 'function') {
            loadBreedInfo(breed); // Call from dogs.js
          } else {
            alert("Sorry, I can't load that breed right now.");
          }
        },
  
        'lookup *ticker': (ticker) => {
          const input = document.getElementById('stockInput');
          if (input) {
            input.value = ticker.toUpperCase();
            fetchStockData();
          } else {
            alert("You're not on the Stocks page!");
          }
        }
      };
  
      annyang.addCommands(commands);
      annyang.start();
    } else {
      alert("Voice recognition not supported in this browser.");
    }
  }
  
  function stopVoice() {
    if (annyang) {
      annyang.abort();
    }
  }
  
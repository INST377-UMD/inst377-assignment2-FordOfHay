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

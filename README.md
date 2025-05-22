[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Fjj4gHXd)

# INST377 - Assignment 2: JavaScript-ing to the Max  
**Name:** Hayford Dogbe

---

## Description

This project is a multi-page interactive website built with HTML, CSS, and JavaScript.  
It features real-time API data, voice command navigation, and dynamic UI elements.

---

##  Pages & Features

| File         | Description |
|--------------|-------------|
| `index.html` | Home page with a random quote, navigation bar, custom buttons, and voice support |
| `stocks.html` | Lets users search for stock tickers, view a Chart.js graph, and see top Reddit stocks with sentiment icons |
| `dogs.html`   | Displays a carousel of 10 random dog images, dynamic buttons for breeds, and detailed breed info |
| `styles.css`  | Global styling, including navbar, custom buttons, and audio instructions box |
| `voice.js`    | All voice command logic (navigate, change color, lookup stock, load breed, etc.) |
| `home.js`     | Fetches and displays quotes from the ZenQuotes API |
| `stocks.js`   | Fetches stock data from Polygon.io and Reddit sentiment data; builds charts and tables |
| `dogs.js`     | Loads dog images and breed data; handles user interaction and carousel logic |

---

##  Voice Commands (Powered by Annyang)

- `Hello` – Alerts “Hello World”
- `Change the color to blue` – Changes background color
- `Navigate to dogs` – Navigates to the Dogs page
- `Load dog breed pug` – Loads info about the Pug breed
- `Lookup MSFT` – Loads stock chart for MSFT

---

##  APIs Used

- [ZenQuotes.io](https://zenquotes.io/) – Random quotes
- [Polygon.io](https://polygon.io/) – Stock data (requires API key)
- [Tradestie](https://tradestie.com/api/v1/apps/reddit) – Reddit stock mentions + sentiment
- [Dog.ceo](https://dog.ceo/dog-api/) – Random dog images
- [DogAPI](https://dogapi.dog/docs/api-v2) – Breed names and info

---

## How to Run Locally

1. Clone or download the repo  
2. Open with **VS Code**  
3. Use **Live Server** extension to preview `index.html`  
4. Make sure to:
   - Replace your **Polygon.io API key** in `stocks.js`
   - Install the **CORS plugin** in your browser to allow API calls  
   - Enable your microphone to test voice features

---

## Notes

- Tested in Chrome with CORS extension enabled  
- Some dog images may occasionally not load — that’s expected behavior from the API  
- Voice recognition may vary by browser/mic permissions

---


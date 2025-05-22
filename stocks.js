// scripts/stocks.js
async function fetchStockData() {
  const ticker = document.getElementById('stockInput').value.toUpperCase();
  const days = document.getElementById('dayRange').value;
  const apiKey = ch8FXQciz2Iq1vCcz8NuaUZl0puGFX4X;
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - days);
  const from = start.toISOString().split('T')[0];
  const to = end.toISOString().split('T')[0];

  const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${from}/${to}?apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.results) {
    alert('No data available');
    return;
  }

  const labels = data.results.map(item => new Date(item.t).toLocaleDateString());
  const values = data.results.map(item => item.c);

  const ctx = document.getElementById('stockChart').getContext('2d');
  if (window.stockChart) window.stockChart.destroy();
  window.stockChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{ label: ticker, data: values, borderColor: 'blue', fill: false }]
    }
  });
}

async function loadRedditStocks() {
  const reddit = await fetch('https://tradestie.com/api/v1/apps/reddit?date=2022-04-03');
  const redditData = await reddit.json();
  const table = document.querySelector('#redditStocks tbody');
  table.innerHTML = '';

  redditData.slice(0, 5).forEach(stock => {
    table.innerHTML += `
      <tr>
        <td><a href="https://finance.yahoo.com/quote/${stock.ticker}" target="_blank">${stock.ticker}</a></td>
        <td>${stock.no_of_comments}</td>
        <td>
          ${stock.sentiment.toLowerCase() === 'bullish' ? '🐂 Bullish' :
            stock.sentiment.toLowerCase() === 'bearish' ? '🐻 Bearish' :
            stock.sentiment}
        </td>
      </tr>`;
  });
}

window.onload = () => {
  loadRedditStocks();
};
  
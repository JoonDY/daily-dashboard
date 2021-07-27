import { API_KEY_STOCKS } from "./key.js";

const stocks = document.getElementById('stocks');
const url = `https://api.twelvedata.com/time_series?symbol=SPX&interval=1day&apikey=${API_KEY_STOCKS}`

export const getStocks = async() => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  createStock(data);
};

const createStock = (data) => {
  const currentStock = calculateStock(data);
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.classList.add('stock-text')


  if (currentStock > 0) {
    h2.classList.add('text-green')
  } else if (currentStock < 0) {
    h2.classList.add('text-red')
  };

  h2.textContent = `${currentStock}%`;
  div.append(h2);
  stocks.append(div)
};

const calculateStock = (data) => {
  const open = data.values[0].open;
  const close = data.values[0].close;

  return Math.round((((close - open) / open) * 100) * 100) / 100 
};
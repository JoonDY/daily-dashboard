
import { createTime } from "./time.js";
import { getLocation } from "./weather.js";
import { getStocks } from "./stocks.js";

const bored = document.getElementById('bored');

const initApp = () => {
  createTime();
  getStocks();
}

initApp();



import { API_KEY } from "./key.js";

const time = document.getElementById('time');
const weather = document.getElementById('weather');
const stocks = document.getElementById('stocks');
const bored = document.getElementById('bored');

const createTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  
  if (min < 10) {
    min = `0${min}`;
  };

  const amPM = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.textContent = `${hour}:${min} ${amPM}`
  
  setTimeout(createTime, 1000);
}

const getLocation = () => {
  let long;
  let lat;
  const units = 'imperial'

  if  (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const API = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${units}`
      getWeather(API);
    })
  }
}

const getWeather = async(url) => {
  const res = await fetch(url);
  const data = await res.json();
  createWeather(data);
}

const createWeather = (data) => {
  const div = document.createElement('div');
  const currentTemp = document.createElement('p')
  const futureTemps = document.createElement('div')
  const minTemp = document.createElement('p')
  const maxTemp = document.createElement('p')
  const humidity = document.createElement('p')

  humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`;
  maxTemp.textContent = `High: ${Math.floor(data.main.temp_max)}°`;
  minTemp.textContent = `Low: ${Math.floor(data.main.temp_min)}°`;
  currentTemp.textContent = `${Math.floor(data.main.temp)}°`;

  futureTemps.append(maxTemp);
  futureTemps.append(minTemp);

  div.append(currentTemp);
  div.append(futureTemps);
  div.append(humidity);

  weather.append(div);
}



createTime();
getLocation();
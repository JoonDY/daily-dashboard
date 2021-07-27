import { API_KEY_WEATHER } from "./key.js";
const weather = document.getElementById('weather');

export const getLocation = (zip, unit='imperial') => {
  let long;
  let lat;
  const units = unit;

  if  (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const API = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${units}`;
      getWeather(API);
    })} else {
      const API = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY_WEATHER}&units=${units}`;
      getWeather(API);
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
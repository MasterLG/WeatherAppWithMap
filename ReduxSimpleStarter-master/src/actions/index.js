import axios from "axios";

const API_KEY = "b57a7c4a182fdf2930b6b5f3e8bd8483";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},tr`;
  const request = axios.get(url); //this method returns a promise
  //console.log("Request: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request //we pass this promise to the payload
  };
}

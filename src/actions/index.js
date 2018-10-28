import axios from 'axios';
const Weather_Key = "fd55347883c141a9fd18abb83cd9ddde";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${Weather_Key}`;
// weather data -> one for every 3 hours fro every three days.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);// returns a promise
    console.log("Request", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
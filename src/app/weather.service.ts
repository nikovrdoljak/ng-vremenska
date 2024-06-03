import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  async getWeatherByCity(): Promise<Weather> {
    let response: any;
    
    const city:string = 'zadar';
    const OPEN_WEATHER_API_KEY: string = 'e0fc4312cb583fa27eb794af4c75f574';
    const parameters = {'q': city, 'appid': OPEN_WEATHER_API_KEY };
    const url: string = `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams(parameters).toString()}`;
    const data = await fetch(url);
    const dataJson =  (await data.json()) ?? {};
    return this.translateWeather(dataJson);
  }

  translateWeather(data: any): Weather {
    const weather: Weather = {
      name:  data.name,
      description:  data?.weather[0]?.description,
      temp: data?.main?.temp,
      humidity:  data?.main?.humidity,
      pressure:  data?.main?.pressure,
    }
    return weather;
  }
}

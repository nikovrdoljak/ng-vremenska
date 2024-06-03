import { Component, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { Weather } from '../weather';


@Component({
  selector: 'app-weather-city',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-city.component.html',
  styleUrl: './weather-city.component.css'
})
export class WeatherCityComponent {
  weather!: Weather;
  description: string = '';
  city = '';
  weatherService: WeatherService = inject(WeatherService);

  ngOnInit(): void { 
    this.weatherService.getWeatherByCity().then((data) => {
      this.weather = data;
    });
  }

}

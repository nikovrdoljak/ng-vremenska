import { Component, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-weather-city',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-city.component.html',
  styleUrl: './weather-city.component.css'
})
export class WeatherCityComponent {
  weather: any = {};
  description: string = '';
  city = '';
  weatherService: WeatherService = inject(WeatherService);

  ngOnInit(): void { 
    this.weatherService.getWeatherByCity().then((data) => {
      this.weather = data;
      this.city = data.name;
      this.description = data?.weather[0]?.description;
    });
  }

}

import { Component } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherCityComponent, RouterModule],
  providers: [WeatherService],
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {}

  title = 'Vremenska prognoza';
}

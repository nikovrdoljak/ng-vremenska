import { Routes } from '@angular/router';
import { WeatherCityComponent } from './weather-city/weather-city.component';

export const routes: Routes = [
    {
        path: '',
        component: WeatherCityComponent,
        title: 'Vremenska prognoza za grad',
    }
];
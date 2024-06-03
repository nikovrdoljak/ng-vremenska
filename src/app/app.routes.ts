import { Routes } from '@angular/router';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { SettingsComponent } from './settings/settings.component';
export const routes: Routes = [
    {
        path: '',
        component: WeatherCityComponent,
        title: 'Vremenska prognoza za grad',
    },
    {
        path: 'settings',
        component: SettingsComponent,
        title: 'Postavke',
    }
];
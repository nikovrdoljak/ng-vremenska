import { Component, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  weatherService: WeatherService = inject(WeatherService);
  settingsForm = new FormGroup({
    city: new FormControl(sessionStorage.getItem('city') ?? 'Zadar', Validators.required),
    lang: new FormControl(sessionStorage.getItem('lang')),
    units: new FormControl(sessionStorage.getItem('units'))
  });
  constructor(private router: Router) {}

  submitSettings() {
    if (this.settingsForm.valid) {
      this.weatherService.submitSettings(
        this.settingsForm.value.city ?? '',
        this.settingsForm.value.lang ?? '',
        this.settingsForm.value.units ?? ''
      );
      this.router.navigate(['']);
    }
  }
}
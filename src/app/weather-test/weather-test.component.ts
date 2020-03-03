import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {Weather} from '../services/model/weather.model';

@Component({
  selector: 'app-weather-test',
  templateUrl: './weather-test.component.html',
  styleUrls: ['./weather-test.component.css'],
})
export class WeatherTestComponent implements AfterViewInit {

  weatherData: Array<Weather> = [];

  constructor(
    private readonly weatherService: WeatherService
  ) { }

  ngAfterViewInit(): void {
    this.weatherService.getWeather()
      .subscribe(
        (weatherData: Array<Weather>) => this.weatherData = weatherData,
        (error) => console.log(error),
        () => {}
      );
  }
}

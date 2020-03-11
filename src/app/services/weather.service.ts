import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Weather} from '../model/weather.model';
import {HttpClient} from '@angular/common/http';
import {ApiManager} from '../api-manager';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<any> {
    return this.http.get<Array<Weather>>(ApiManager.BACKEND_API + '/weatherforecast');
  }
}

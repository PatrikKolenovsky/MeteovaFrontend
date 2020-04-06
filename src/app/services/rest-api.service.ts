import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from '../model/device.model';
import {ApiManager} from '../api-manager';
import {DeviceSector} from '../model/device-sector.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  getDeviceDataBySector(): Observable<any> {
    return this.http.get<Array<DeviceSector>>(ApiManager.BACKEND_API + '/DeviceData');
  }
}

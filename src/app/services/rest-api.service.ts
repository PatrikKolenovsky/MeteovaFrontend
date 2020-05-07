import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from '../model/device.model';
import {ApiManager} from '../api-manager';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  getAllDeviceData(): Observable<any> {
    return this.http.get<Array<Device>>(ApiManager.BACKEND_API + '/device');
  }

  getDeviceDataById(id): Observable<any> {
    return this.http.get<Array<Device>>(ApiManager.BACKEND_API + '/device/' + id);
  }

  getAllDeviceDataByFulltext(search): Observable<any> {
    return this.http.get<Array<Device>>(ApiManager.BACKEND_API + '/device?location=' + search);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from '../model/device.model';
import {ApiManager} from '../api-manager';
import {Envi} from '../model/envi';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  getAllDeviceData(): Observable<any> {
    return this.http.get<Array<Device>>(ApiManager.BACKEND_API + '/device');
  }

  getAllEnviData(): Observable<any> {
    return this.http.get<Array<Envi>>(ApiManager.BACKEND_API + '/envidata');
  }

  getDeviceDataById(id): Observable<any> {
    return this.http.get<Array<Device>>(ApiManager.BACKEND_API + '/device/' + id);
  }

  getDeviceDataDetailById(id): Observable<any> {
    return this.http.get<Array<Device>>(ApiManager.BACKEND_API + '/device/' + 'detail/'  + id);
  }

  getAllDeviceDataByFulltext(search): Observable<any> {
    return this.http.get<Array<Device>>(ApiManager.BACKEND_API + '/device?location=' + search);
  }


}

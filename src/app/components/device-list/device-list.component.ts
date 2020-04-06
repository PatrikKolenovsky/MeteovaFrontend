import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DeviceSector} from '../../model/device-sector.model';
import {RestApiService} from '../../services/rest-api.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements AfterViewInit {

  deviceDataBySector: Array<DeviceSector> = [];

  constructor(
    private readonly restApiService: RestApiService
  ) {
  }

  ngAfterViewInit(): void {
    this.getDeviceDataBySector();
  }

  getDeviceDataBySector(): void {
    this.restApiService.getDeviceDataBySector()
      .subscribe(
        (deviceDataBySector: Array<DeviceSector>) => this.deviceDataBySector = deviceDataBySector, // Podobné `then` metodě
        (error) => console.log(error), // Podobné `catch()` metodě
        () => {
        }
      );
  }
}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RestApiService} from '../../services/rest-api.service';
import {Device} from '../../model/device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements AfterViewInit {
  selectedDevice: Device | null;
  deviceData: Array<Device> = [];
  constructor(
    private readonly restApiService: RestApiService
  ) {
  }

  ngAfterViewInit(): void {
    this.restApiService.getAllDeviceData()
      .subscribe(
        (deviceData: Array<Device>) => this.deviceData = deviceData,
        (error) => console.log(error),
        () => {
        }
      );
  }

  selectDeviceHandler(event: any) {
    this.restApiService.getDeviceDataById(event.target.value)
      .subscribe(
        (selectedDevice: Device) => this.selectedDevice = selectedDevice,
        (error) => console.log(error),
        () => {
        }
      );
  }
}

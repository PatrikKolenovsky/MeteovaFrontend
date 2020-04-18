import {AfterViewInit, Component} from '@angular/core';
import {RestApiService} from '../../services/rest-api.service';
import {Device} from '../../model/device.model';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements AfterViewInit {
  deviceData: Array<Device> = [];
  constructor(
    private readonly restApiService: RestApiService,
    private dataTransferService: DataTransferService
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
    this.dataTransferService.nextMessage(event.target.value);
  }
}

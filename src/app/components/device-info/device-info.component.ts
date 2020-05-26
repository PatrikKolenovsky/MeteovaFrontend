import {Component, OnInit} from '@angular/core';
import {Device} from '../../model/device.model';
import {RestApiService} from '../../services/rest-api.service';
import {DataTransferService} from '../../services/data-transfer.service';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {
  selectedDevice: Device;
  selectedDeviceId: number;
  constructor(private readonly restApiService: RestApiService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.dataTransferService.sharedMessage.subscribe(message => {
      if (message === 'detail') {
      this.restApiService.getDeviceDataById(this.selectedDeviceId)
        .subscribe(
          (selectedDevice: Device) => this.selectedDevice = selectedDevice,
          (error) => console.log(error),
          () => {
          }
        );
      } else if (message != null) {
        this.selectedDeviceId = message;
      }
    }
    );
  }

}

import {Component, OnInit} from '@angular/core';
import {Device} from '../../model/device.model';
import {Module} from '../../model/module';
import {RestApiService} from '../../services/rest-api.service';
import {DataTransferService} from '../../services/data-transfer.service';
import {Envi} from '../../model/envi';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {
  selectedDevice: Device;
  moduleData: Module;
  selectedDeviceId: number;
  enviData: Envi[];
  constructor(private readonly restApiService: RestApiService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.dataTransferService.sharedMessage.subscribe(message => {
      if (message === 'detail') {
      this.restApiService.getDeviceDataDetailById(this.selectedDeviceId)
        .subscribe(
          (selectedDevice: Device) => [this.selectedDevice = selectedDevice, this.moduleData = selectedDevice.module],
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

  setEnviData() {
    this.restApiService.getAllEnviData().subscribe(
      (enviData: Array<Envi>) => this.enviData = enviData,
      (error) => console.log(error),
      () => {
      }
    );
  }
}

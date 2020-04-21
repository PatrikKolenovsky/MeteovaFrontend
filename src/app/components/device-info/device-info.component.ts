import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  constructor(private readonly restApiService: RestApiService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.dataTransferService.sharedMessage.subscribe(message => {
      if (message != null) {
      this.restApiService.getDeviceDataById(message)
        .subscribe(
          (selectedDevice: Device) => this.selectedDevice = selectedDevice,
          (error) => console.log(error),
          () => {
          }
        );
      }
    }
    );
  }

//   this.appParameters.subscribe(params => {
//   const id = params['id'];
//   if (id !== null && id!== undefined) {
//   this.getUser(id).subscribe(user => this.user = user);
// }
// });
//   this.service.service1().subscribe( res1 => {
//   this.service.service1().subscribe( res2 => {
//   this.service.service1().subscribe( res3 => {
//   this.funcA(res1, res2, res3);
// });
// });
// });
//   ngOnChanges(changes: SimpleChanges): void {
//     this.setSelectedDevice();
//   }

  // setSelectedDevice(deviceId) {
  //     this.restApiService.getDeviceDataById(deviceId)
  //       .subscribe(
  //         (selectedDevice: Device) => this.selectedDevice = selectedDevice,
  //         (error) => console.log(error),
  //         () => {
  //         }
  //       );
  // }

}

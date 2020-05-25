import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
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
  content: boolean | false;

  constructor(
    private readonly restApiService: RestApiService,
    private dataTransferService: DataTransferService,
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

  toggleContent() {
    this.content = this.content === false || this.content === undefined;
  }


  selectDeviceHandler(event) {
    const target = event.target || event.currentTarget;
    const idAttr = target.attributes.id;
    const selectedDeviceId = idAttr.nodeValue;
    this.dataTransferService.nextMessage(selectedDeviceId);
    this.toggleContent();
  }

  selectDeviceFulltextHandler(event: any) {
    if (event.target.value === '') {
      this.restApiService.getAllDeviceData()
        .subscribe(
          (deviceData: Array<Device>) => this.deviceData = deviceData,
          (error) => console.log(error),
          () => {
          }
        );
    } else {
      this.restApiService.getAllDeviceDataByFulltext(event.target.value)
        .subscribe(
          (deviceData: Array<Device>) => this.deviceData = deviceData,
          (error) => console.log(error),
          () => {
          }
        );
    }
  }
}

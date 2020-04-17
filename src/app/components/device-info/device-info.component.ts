import { Component, OnInit } from '@angular/core';
import {Device} from '../../model/device.model';
import {RestApiService} from '../../services/rest-api.service';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {

  selectedDevice: Device;
  constructor(private readonly restApiService: RestApiService) {
  }

  ngOnInit(): void {
  }



}

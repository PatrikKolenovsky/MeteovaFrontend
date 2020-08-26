import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import * as L from 'leaflet';
import {ApiManager} from '../../api-manager';
import {Device} from '../../model/device.model';
import {DataTransferService} from '../../services/data-transfer.service';
import {RestApiService} from '../../services/rest-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnInit {
  selectedDevice: Device;
  private map;

  @Input()
  public markers: { lat: number, long: number }[];

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
    this.closeSelectedDevice();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  closeSelectedDevice() {
    this.selectedDevice = undefined;
  }

  showDetail() {
    this.dataTransferService.nextMessage('detail');
    setTimeout(() => {
      this.closeSelectedDevice();
    }, 60);

  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [49.84058, 18.28829],
      zoom: 14
    });

    const tiles = L.tileLayer(ApiManager.STREET_MAP_API + '{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.map.addLayer(tiles);
    this.showMarkers();
  }

  protected showMarkers(): void {
    if (this.markers !== undefined && this.markers !== null && this.markers.length > 0) {

      let i: number;

      for (i = 0; i < this.markers.length; ++i) {
        L.marker([this.markers[i].lat, this.markers[i].long],
          {title: 'Nazev stanice/destinace'}).bindPopup('Informace o tehle stanici').openPopup().addTo(this.map);
      }
    }
  }
}

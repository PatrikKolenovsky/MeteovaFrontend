import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import * as L from 'leaflet';
import {ApiManager} from '../../api-manager';
import {RestApiService} from '../../services/rest-api.service';
import {Device} from '../../model/device.model';
import {Marker} from '../../model/marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;
  deviceData: Array<Device> = [];
  markers: Array<Marker>[];

  constructor(private readonly restApiService: RestApiService) {

  }

  ngAfterViewInit(): void {
    this.initMap();
    this.restApiService.getAllDeviceData()
      .subscribe(
        (deviceData: Array<Device>) => this.deviceData = deviceData,
        (error) => console.log(error),
        () => {
        }
      );

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
    // for (const device of this.deviceData) {
    //   alert(device.device_location);
    // }
    const marker =  {49.82975, 18.17482} as Marker;
    marker.x = 49.82975;
    marker.y = 18.17482;

    this.markers.push(marker);

    // if (this.markers !== undefined && this.markers !== null && this.markers.length > 0) {
    //
    //   let i: number;
    //
    //   for (i = 0; i < this.markers.length; ++i) {
    //     L.marker([this.markers[i].lat, this.markers[i].long], {title: "Nazev stanice/destinace"}).bindPopup("Informace o tehle stanici").openPopup().addTo(this.map);
    //   }
    // }
  }
}

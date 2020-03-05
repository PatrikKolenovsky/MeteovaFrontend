import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;

  @Input()
  public markers: {lat: number, long: number}[];

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 49.84058, 18.28829 ],
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.map.addLayer(tiles);
    this.showMarkers();
  }

  protected showMarkers(): void {
    if (this.markers !== undefined && this.markers !== null && this.markers.length > 0) {

      let i: number;

      for (i = 0; i < this.markers.length; ++i) {
        L.marker([this.markers[i].lat, this.markers[i].long], {title: "Nazev stanice/destinace"}).bindPopup("Informace o tehle stanici").openPopup().addTo(this.map);
      }
    }
  }
}

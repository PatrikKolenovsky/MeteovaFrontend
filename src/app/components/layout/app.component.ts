import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeteovaFrontend';

  public markers: {lat: number, long: number}[];

  constructor() {
    this.markers = [
      { lat: 49.84168, long: 18.28625 },
      { lat: 49.84069, long: 18.28272 },
      { lat: 49.8387, long: 18.2919 }
    ];
  }
}

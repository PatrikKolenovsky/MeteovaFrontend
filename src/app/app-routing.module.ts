import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherTestComponent} from './components/weather-test/weather-test.component';
import {MapComponent} from './components/map/map.component';

const routes: Routes = [
  {path: 'weather', component: WeatherTestComponent},
  {path: '', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

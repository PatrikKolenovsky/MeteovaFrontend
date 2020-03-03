import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherTestComponent} from './weather-test/weather-test.component';

const routes: Routes = [
  {path: 'weather', component: WeatherTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from './components/map/map.component';
import {AboutProjectComponent } from './components/about-project/about-project.component';

const routes: Routes = [
  {path: 'about', component: AboutProjectComponent},
  {path: '', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

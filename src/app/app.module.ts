import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/layout/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceInfoComponent } from './components/device-info/device-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AboutProjectComponent,
    DeviceListComponent,
    DeviceInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

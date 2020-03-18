import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/layout/app.component';
import { WeatherTestComponent } from './components/weather-test/weather-test.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTestComponent,
    MapComponent,
    AboutProjectComponent,
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

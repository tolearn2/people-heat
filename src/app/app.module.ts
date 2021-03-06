import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { LocationService } from './shared/location.service';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { TrafficCardComponent } from './status-panel/traffic-card/traffic-card.component';
import { LiveCardComponent } from './status-panel/live-card/live-card.component';
import { ConfigurationCardComponent } from './status-panel/configuration-card/configuration-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    StatusPanelComponent,
    TrafficCardComponent,
    LiveCardComponent,
    ConfigurationCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

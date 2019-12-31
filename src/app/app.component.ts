import { Component, AfterViewInit, ViewChild, ElementRef } from 
  '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.730610;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
      center: this.coordinates,
      zoom: 8,
    };
    marker = new google.maps.Marker({
     position: this.coordinates,
     map: this.map,
   });
    ngAfterViewInit() {
    this.mapInitializer();
   }
    mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      this.marker.setMap(this.map);
   }
}

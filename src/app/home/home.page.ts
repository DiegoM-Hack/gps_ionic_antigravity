import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';
import {IonButton, IonTitle, IonCardContent, IonToolbar, IonContent, IonHeader} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonButton, IonTitle, 
    IonCardContent, IonToolbar, 
    IonContent, IonHeader, CommonModule]
})
export class HomePage {
  coords: any;

  async obtenerUbicacion() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates.coords;
  }
}
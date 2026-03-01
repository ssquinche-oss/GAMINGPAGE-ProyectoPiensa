import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    RouterLink,
    RouterLinkActive
  ]
})
export class AppComponent {

  abrirPDF() {
    const url = 'assets/pdf/Juego.pdf';
    window.open(url, '_blank');
  }

}
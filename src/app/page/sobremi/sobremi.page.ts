import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './sobremi.page.html',
  styleUrls: ['./sobremi.page.scss'],
})
export class SobreMiPage {

  constructor() {}

  abrirPDF() {
    const url = 'assets/pdf/Juego.pdf';
    window.open(url, '_blank');
  }

}
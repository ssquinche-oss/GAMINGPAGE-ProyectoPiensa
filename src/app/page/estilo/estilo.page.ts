import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-estilo',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './estilo.page.html',
  styleUrls: ['./estilo.page.scss'],
})
export class EstiloPage {


  constructor() {}


  abrirPDF() {
    const url = 'assets/pdf/Juego.pdf';
    window.open(url, '_blank');
  }


}
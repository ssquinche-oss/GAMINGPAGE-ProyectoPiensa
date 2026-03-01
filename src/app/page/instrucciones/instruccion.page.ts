import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './instruccion.page.html',
  styleUrls: ['./instruccion.page.scss'],
})
export class InstruccionPage {

  constructor() {}

  abrirPDF() {
    const url = 'assets/pdf/Juego.pdf';
    window.open(url, '_blank');
  }


}
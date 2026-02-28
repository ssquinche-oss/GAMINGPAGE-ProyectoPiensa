import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './instruccionesreglas.page.html',
  styleUrls: ['./instruccionesreglas.page.scss'],
})
export class InstruccionesReglasPage {


  constructor() {}


  abrirPDF() {
    const url = 'assets/pdf/Juego.pdf';
    window.open(url, '_blank');
  }


}
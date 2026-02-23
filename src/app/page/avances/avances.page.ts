import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-avances',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './avances.page.html',
  styleUrls: ['./avances.page.scss'],
})
export class AvancesPage {


  constructor() {}


  abrirPDF() {
    const url = 'assets/pdf/Juego.pdf';
    const nuevaVentana = window.open(url, '_blank');


    if (nuevaVentana) {
      nuevaVentana.onload = () => {
        nuevaVentana.print();
      };
    }
  }


}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, RouterLink],
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage {
  constructor() {}
}


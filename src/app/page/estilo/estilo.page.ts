import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-estilo',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, RouterLink],
  templateUrl: './estilo.page.html',
  styleUrls: ['./estilo.page.scss'],
})
export class EstiloPage {
  constructor() {}
}

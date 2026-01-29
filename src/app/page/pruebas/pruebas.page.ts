import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage {}

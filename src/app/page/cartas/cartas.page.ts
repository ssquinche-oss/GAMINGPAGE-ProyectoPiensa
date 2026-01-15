import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './cartas.page.html',
  styleUrls: ['./cartas.page.scss'],
})
export class CartasPage {}

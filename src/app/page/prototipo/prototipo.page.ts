import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prototipo',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './prototipo.page.html',
  styleUrls: ['./prototipo.page.scss'],
})
export class PrototipoPage {}

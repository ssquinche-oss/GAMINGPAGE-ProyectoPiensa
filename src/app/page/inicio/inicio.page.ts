import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FileOpener } from '@capacitor-community/file-opener';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, RouterLink],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(
    private http: HttpClient,
    private plt: Platform,
    private toastCtrl: ToastController
  ) {}

  async abrirPDF() {
    try {
      const pdfPath = 'assets/Juego.pdf'; // verifica que el archivo esté exactamente así (mayúscula J)

      // 1. Obtenemos el PDF como blob desde assets
      const blob = await this.http.get(pdfPath, { responseType: 'blob' }).toPromise();

      // 2. Convertimos blob a base64
      const base64 = await this.blobToBase64(blob!);

      // 3. Directorio según plataforma (Documents en iOS, Data en Android)
      const directory = this.plt.is('ios') ? Directory.Documents : Directory.Data;
      const fileName = 'Juego_Reglas.pdf';

      // 4. Guardamos el archivo temporalmente en el dispositivo
      const writeResult = await Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: directory,
        recursive: true
      });

      // 5. Abrimos con el visor nativo del teléfono
      await FileOpener.open({
        filePath: writeResult.uri,
        contentType: 'application/pdf'
      });

      // Toast de éxito (opcional pero queda lindo)
      const toast = await this.toastCtrl.create({
        message: 'Abriendo el PDF del juego... ¡Que los gatos políticos dominen el tablero! 😼',
        duration: 2500,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();

    } catch (error) {
      console.error('Error al abrir el PDF:', error);

      // Fallback para web (abre en pestaña nueva)
      if (!this.plt.is('hybrid')) {
        window.open('/assets/Juego.pdf', '_blank');
      } else {
        const toast = await this.toastCtrl.create({
          message: 'No se pudo abrir el PDF 😿. Verifica que Juego.pdf esté en la carpeta assets/.',
          duration: 4000,
          color: 'danger',
          position: 'bottom'
        });
        await toast.present();
      }
    }
  }

  // Helper para convertir Blob a base64
  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = (reader.result as string).split(',')[1];
        resolve(base64data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
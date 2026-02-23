import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FileOpener } from '@capacitor-community/file-opener';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-descarga',  // ajusta al selector real de tu página
  templateUrl: './descarga.page.html',
  styleUrls: ['./descarga.page.scss'],
})
export class DescargaPage {

  constructor(
    private http: HttpClient,
    private plt: Platform,
    private toastCtrl: ToastController
  ) {}

  async descargarYAbrirPDF() {
    try {
      // Ruta al PDF (ajusta si está en subcarpeta: 'assets/pdf/Juego.pdf')
      const pdfPath = 'assets/Juego.pdf';

      // Obtenemos el blob del PDF empaquetado en assets
      const blob = await this.http.get(pdfPath, { responseType: 'blob' }).toPromise();

      // Convertimos blob a base64 (necesario para writeFile)
      const base64 = await this.blobToBase64(blob!);

      // Directorio según plataforma (Documents en iOS, Data en Android)
      const directory = this.plt.is('ios') ? Directory.Documents : Directory.Data;

      const fileName = 'Reglas_RegNum_Juego.pdf';  // nombre visible al abrir

      // Escribimos el archivo temporalmente en el dispositivo
      const writeResult = await Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: directory,
        recursive: true
      });

      // Abrimos con el visor nativo del dispositivo
      await FileOpener.open({
        filePath: writeResult.uri,
        contentType: 'application/pdf'  // o mimeType en algunas versiones
      });

      // Toast de éxito (opcional, pero queda lindo para tu tema felino)
      const toast = await this.toastCtrl.create({
        message: '¡Abriendo reglas del juego! Que gane el gato más astuto 😼',
        duration: 2500,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();

    } catch (error) {
      console.error('Error al abrir el PDF:', error);

      const toast = await this.toastCtrl.create({
        message: 'Ups... No pude abrir el PDF. Verifica que esté en assets.',
        duration: 3000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  // Helper para Blob → base64
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
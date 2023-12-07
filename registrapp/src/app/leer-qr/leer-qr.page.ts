import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from '../servicio-datos.service';
import { ApiDatosService } from '../apiDatos/api-datos.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { BrowserQRCodeReader, Result, VideoInputDevice } from '@zxing/library';
import { Router } from '@angular/router';



@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage implements OnInit {

  public alertButtons = ['Aceptar'];

  qrData : any;
  prueba : any;
  seccion : any; 
  id : any;
  horarios : any;
  permitir : boolean = false;
  asistencias : any;
  asignatura : any;
  enviar : boolean = false;
  private codeReader: BrowserQRCodeReader;
  private selectedDevice: VideoInputDevice | null;
  private scanning: boolean = false;
  private mediaStream: MediaStream | null = null;

  private continueScanning: boolean = true;

  constructor(private servicioDatos: ServicioDatosService,
    private api:ApiDatosService,
    private router: Router,
    private activated: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController,) {this.codeReader = new BrowserQRCodeReader();
      this.selectedDevice = null;  }

    getId() {
      return this.servicioDatos.alumnoId;
    }

    ngOnInit() {
      this.activated.paramMap.subscribe(p => {
        this.seccion = p.get('qrId') ?? '';
        this.asignatura = p.get('asignatura')
        this.id = this.servicioDatos.alumnoId;
        this.api.getHorarioConSeccion( this.seccion,this.id).subscribe((horarioData: any) => {
          this.horarios = horarioData;
          // console.log(this.horarios);

          // Obtener la fecha actual
const fechaActual = new Date();

// Obtener día, mes y año
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // ¡Recuerda que los meses en JavaScript van de 0 a 11!
const año = fechaActual.getFullYear();

// Formatear la fecha como "dd/mm/yyyy"
const fechaFormateada = `${dia}/${mes}/${año}`;

// Obtener la hora actual
const hora = ('0' + fechaActual.getHours()).slice(-2);
const minutos = ('0' + fechaActual.getMinutes()).slice(-2);


// Formatear la hora como "hh:mm"
const horaFormateada = `${('0' + hora).slice(-2)}:${('0' + minutos).slice(-2)}`;

/* console.log('Fecha:' + fechaFormateada);
console.log('Hora: ' + horaFormateada); */
          this.prueba = {
            asignatura: this.asignatura,
            seccion: this.seccion,
            AlumnoId: this.servicioDatos.alumnoId,
            nombreAlumno: this.servicioDatos.nombreUsuario,
            fecha:fechaFormateada,
            hora:horaFormateada
          };
          /* console.log(this.prueba); */
        });
        this.api.getAsistenciaAlumno(this.id, this.seccion).subscribe((asistenciaData: any) => {
          this.asistencias = asistenciaData;
          // console.log(this.asistencias);
          
        })
      });

      

    }

    async iniciarCamara() {
      try {
        const constraints = { video: { facingMode: 'environment' } };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    
        if (stream) {
          // Almacenamos el stream en la propiedad mediaStream
        this.mediaStream = stream;
          const codeReader = new BrowserQRCodeReader();
          const videoInputDevices: VideoInputDevice[] = await codeReader.getVideoInputDevices();
    
          if (videoInputDevices && videoInputDevices.length > 0) {
            const selectedDevice: VideoInputDevice = videoInputDevices[0];
    
            codeReader.decodeFromInputVideoDevice(selectedDevice.deviceId).then((result: Result) => {
              /* console.log(result.getText()); */
              console.log('enviado');
              if(result.getText() === this.seccion){
              this.api.postAsistencia(this.prueba).subscribe(response => {

                /* console.log(response); */
              });
              this.enviar = !this.enviar;
              if (this.enviar) {
                
                this.mostrarAlerta();
              }
              
              
            }
            else{
              console.log('seccion ioncorrecta');
              if (!this.enviar) {
                
                this.mostrarError();
              }
            }
              
            });
            
            const video = document.getElementById('video') as HTMLVideoElement;
            video.srcObject = stream;
            video.play();
            console.log('funciona anasheiii');
          } else {
            console.error('No se encontraron dispositivos de video.');
          }
        } else {
          console.error('No se pudo obtener acceso a la cámara.');
        }
      } catch (error) {
        console.error('Error al iniciar la cámara:', error);
      }
    }

    scanCallback(result: Result) {
      if (result) {
        this.qrData = result.getText();
        if (this.qrData) {
          // Actualizar this.prueba con el resultado del escaneo
          // Enviar los datos directamente
          
        } else {
          console.error('Error: No se pudo obtener el texto del código QR.', result);
        }
      }
    }
  
    mostrarDatos()
  {
    this.permitir = !this.permitir;
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      buttons: this.alertButtons
    });

    await alert.present();
    this.detenerCamara();
    this.router.navigate(['inicio-alumnos/' + this.servicioDatos.alumnoId ]);
  }
  
  async mostrarError() {
    const alert = await this.alertController.create({
      header: 'Seccion incorrecta',
      buttons: this.alertButtons
    });

    await alert.present();
    this.detenerCamara();
    this.router.navigate(['inicio-alumnos/' + this.servicioDatos.alumnoId ]);
  }

  detenerCamara() {
    if (this.mediaStream) {
      // Detener el stream de la cámara
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null; // Limpiar la referencia al stream
    }
  
  }

}
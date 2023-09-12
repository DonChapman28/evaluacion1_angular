import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioDatosService } from '../servicio-datos.service';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
nombre = '';
clave = '';  
dato: boolean = false;



  constructor(private alertContorller:AlertController,
    private toastController: ToastController,
    private router: Router,
    private servicioDatos: ServicioDatosService) { 

    }

    

  ngOnInit() {
  }

  async validar()
  {
    
    const numeroLetrasNombre = this.nombre.length;
    const numeroLetrasClave = this.clave.length;
    /* console.log(numeroLetrasNombre)
    console.log(numeroLetrasClave)
 */
    if (numeroLetrasClave === 0) {
      const toast = await this.toastController.create({
        message: 'El campo de contraseña no debe estar vacío',
        buttons: ['OK'],
        color: 'danger',
        position : 'bottom',
        duration : 500,
      });
      await toast.present();
    }
    
    if (numeroLetrasNombre === 0) {
      const toast = await this.toastController.create({
        message: 'El campo de nombre de usuario no debe estar vacío',
        buttons: ['OK'],
        color: 'danger',
        position : 'bottom',
        duration : 500,
      });
      await toast.present();
    }
///-----------------------------------------------------------------
    else if (numeroLetrasNombre >= 4 && numeroLetrasClave >= 8) {
      this.dato = true;
      if(this.dato){
        this.router.navigate(['inicio']);
        this.servicioDatos.nombreUsuario = this.nombre;
        this.nombre = '';
        this.clave = '';
      }
    }
    else{
      if (numeroLetrasClave > 1 && numeroLetrasClave < 8) {
        const toast = await this.toastController.create({
          message: 'contraseña debe tener minimo 8 caracteres',
          buttons: ['OK'],
          color: 'warning',
          position : 'bottom',
          duration : 500,
        });
        await toast.present();
      }
      
      if (numeroLetrasNombre > 1 && numeroLetrasNombre < 4) {
        const toast = await this.toastController.create({
          message: 'nombre de usuario debe tener minimo 4 caracteres',
          buttons: ['OK'],
          color: 'warning',
          position : 'bottom',
          duration : 500,
        });
        await toast.present();
      }
    }
    
  
  }  

}

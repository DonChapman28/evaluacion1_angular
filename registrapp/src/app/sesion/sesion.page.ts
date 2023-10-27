import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioDatosService } from '../servicio-datos.service';
import { ApiDatosService } from '../apiDatos/api-datos.service';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
nombre = '';
clave = '';  
dato: boolean = false;
profesorEncontrado: any = [];



  constructor(private alertContorller:AlertController,
    private toastController: ToastController,
    private router: Router,
    private servicioDatos: ServicioDatosService,
    private apiDatos : ApiDatosService) { 

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
        
        if (this.nombre.endsWith('@profe.cl')) {
        // Redirigir a la página de inicio de profesores
        this.router.navigate(['inicio']);
        this.servicioDatos.nombreUsuario = this.nombre;
          }
          // Redirigir a la página de inicio de profesores
          
         
        
        
        else if (this.nombre.endsWith('@alumno.cl')) {
          // Redirigir a la página de inicio de alumnos
          this.router.navigate(['inicio-alumnos']);
          this.servicioDatos.nombreUsuario = this.nombre;
        } else {
          // Dominio de correo no válido
          const toast = await this.toastController.create({
            message: 'Usuario inválido: dominio de correo incorrecto',
            buttons: ['OK'],
            color: 'danger',
            position: 'bottom',
            duration: 500,
          });
          await toast.present();
        }
    
        this.servicioDatos.nombreUsuario = this.nombre;
        this.nombre = '';
        this.clave = '';
      }
    }
    //----------minimo de caracteres
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

    // Validación de dominio de correo
  
    
  
  }  

}

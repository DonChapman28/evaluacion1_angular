import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


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
    private toastController: ToastController,private router: Router) { 

    }

  ngOnInit() {
  }

  async validar()
  {
    
    const numeroLetrasNombre = this.nombre.length;
    const numeroLetrasClave = this.clave.length;
    console.log(numeroLetrasNombre)
    console.log(numeroLetrasClave)

    if (numeroLetrasClave === 0) {
      const toast = await this.toastController.create({
        message: 'El campo de contraseña no debe estar vacío',
        buttons: ['OK'],
        color: 'danger',
        position : 'bottom',
      });
      await toast.present();
    }
    
    if (numeroLetrasNombre === 0) {
      const toast = await this.toastController.create({
        message: 'El campo de nombre de usuario no debe estar vacío',
        buttons: ['OK'],
        color: 'danger',
        position : 'bottom',
      });
      await toast.present();
    }
///-----------------------------------------------------------------
    if (numeroLetrasNombre > 4 && numeroLetrasClave > 12) {
      this.dato = true;
    }

    }  

}

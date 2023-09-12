import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
nombre = '';
dato : boolean = true;

  constructor(private alertContorller:AlertController,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  async recuperar()
  {
    
    const numeroLetrasNombre = this.nombre.length;
    console.log(numeroLetrasNombre)
   
    
    if (numeroLetrasNombre === 0) {
      const toast = await this.toastController.create({
        message: 'El campo de nombre de usuario no debe estar vacío',
        buttons: ['OK'],
        color: 'danger',
        position : 'bottom',
      });
      await toast.present();
    }
    else if (numeroLetrasNombre >= 4) {
      this.dato = true;
      if(this.dato){
        this.router.navigate(['sesion']);
      }
    }
    else{
        if (numeroLetrasNombre < 4) {
        const toast = await this.toastController.create({
          message: 'nombre de usuario invalido',
          buttons: ['OK'],
          color: 'warning',
          position : 'bottom',
        });
        await toast.present();
      }
    }
      
     
  }  
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private alertContorller:AlertController,
    private router: Router) { }

  ngOnInit() {
  }

async cerrarSesion()
{
  const alert = await this.alertContorller.create({
      
    header : '',
    subHeader : '',
    message : "Adios",
    buttons : ['x'],

  });
  await alert.present();
  this.router.navigate(['sesion']);

}
}
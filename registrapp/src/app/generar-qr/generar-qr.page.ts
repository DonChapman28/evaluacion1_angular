import { Component, OnInit } from '@angular/core';
import { ApiDatosService } from '../apiDatos/api-datos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  texto : any;
  constructor(
    private api:ApiDatosService,
    private activated: ActivatedRoute,) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(p => {
      this.texto = p.get('qrId') ?? '';
      
      
    });

    
  }

}

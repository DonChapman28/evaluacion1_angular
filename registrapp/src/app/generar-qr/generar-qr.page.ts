import { Component, OnInit } from '@angular/core';
import { ApiDatosService } from '../apiDatos/api-datos.service';
import { ActivatedRoute } from '@angular/router';
import { ServicioDatosService } from '../servicio-datos.service';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  texto : any;
  seccion : any;
  asistenciaSeccion: any;
  permitir : boolean = false;
  permitirQr : boolean = false;
  fechaAsist :any;
  constructor(private servicioDatos: ServicioDatosService,
    private api:ApiDatosService,
    private activated: ActivatedRoute) { }

    ngOnInit() {
      this.activated.paramMap.subscribe(p => {
        this.texto = p.get('qrId') ?? '';
        this.seccion = p.get('qrId') ?? '';
        this.api.getAsistenciaSeccion(this.seccion).subscribe((asistenciaData: any) => {
        this.asistenciaSeccion = asistenciaData;
        // console.log(this.asistenciaSeccion);
        })
        });
    }
  
    mostrarDatos()
    {
      this.permitir = !this.permitir;
    }
    mostrarQr()
    {
      this.permitirQr = !this.permitirQr;
    }
  
  }

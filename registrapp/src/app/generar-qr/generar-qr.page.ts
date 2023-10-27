import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  texto : any;
  constructor() { }

  ngOnInit() {
    this.texto = 'lhasdf82t6gsadf';
  }

}

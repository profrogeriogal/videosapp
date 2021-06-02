import { DadserieService } from './../services/dadserie.service';
import { Component, OnInit } from '@angular/core';
import { ISerie } from 'platforms/android/app/models/ISerie.model';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISerie;
  constructor(public dadosSerie: DadserieService) { }

  ngOnInit() {
     this.serie=this.dadosSerie.pegarDados('serie');
     console.log('Serie Enviado',this.serie);
  }
}

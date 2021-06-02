import { DadserieService } from './../services/dadserie.service';
import { ISerie } from './../../../platforms/android/app/models/ISerie.model';
import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

   titulo = 'Séries';
   listaSerie: ISerie[] = [
   {
      nome:'Lucifer',
      lancamento:'2016',
      duracao:'45m',
      classificacao:85,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      generos:['Crime','Sci-Fi & Fantasy']
   },
   {
    nome:'The Flash',
    lancamento:'2014',
    duracao:'44m',
    classificacao:77,
    cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
    generos:['Drama','Sci-fi & Fantasy']
   },
   {
    nome:'The Good Doctor',
    lancamento:'2017',
    duracao:'43m',
    classificacao:86,
    cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
    generos:['Drama']
 },
 {
  nome:'Falcão e o Soldado Infernal',
  lancamento:'2021',
  duracao:'51m',
  classificacao:79,
  cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8Hi3GI4q1oR6EImrDWrAQFn8Ha.jpg',
  generos:['Sci-Fi & Fantasy',' Ação e Aventura', 'Drama', 'Policial']

 },
 {
  nome:'Quem matou Sara?',
  lancamento:'2021',
  duracao:'kkkkkkkkkk',
  classificacao:78,
  cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5BYyTmEqkYXIgdDPyEiAeAbhIsI.jpg',
  generos:['Drama', 'Crime', 'Mistério']
}
   ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public serieDados: DadserieService,
    public route: Router,
    ) {}

   exibirSerie(serie: ISerie) {
     this.serieDados.guardarDados('serie',serie);
     this.route.navigateByUrl('/dados-serie');
   }
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Desejar realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }
}

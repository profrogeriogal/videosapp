import { IFilmes } from './../../../platforms/android/app/models/iFilme.model';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo ='Vídeo App';
  listaVideos: IFilmes[] = [
  {
    nome: 'O Legado de Júpiter ',
    lancamento: '15/10/2021',
    duracao: '1h 50m',
    classificacao: 76,
    cartaz:'https://www.themoviedb.org/t/p/w220_and_h330_face/1RFKW55GHQShX07TdXFHvGFjZKI.jpg',
    generos:['Ação', 'Fantasia','Aventura'],
    pagina: '/olegado'
  },

{
    nome: 'Flash ',
    lancamento: '15/10/2021',
    duracao: '1h 45m',
    classificacao: 72,
    cartaz:'https://www.themoviedb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
    generos:['Ação', 'Fantasia','Aventura'],
    pagina :'/flash'
  }

  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public router: Router) {}

    exibirFilme(filme: IFilmes){
      this.dadosService.guardaDados('filme',filme);
      this.router.navigateByUrl('/dados-filme');
    }

    async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Desejar realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }
}

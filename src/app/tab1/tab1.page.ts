import { IGenero } from './../../../platforms/android/app/models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../../../platforms/android/app/models/IFilmeApi.model';
import { FilmeService } from './../services/filme.service';
import { IFilmes } from '../../../platforms/android/app/models/IFilme.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo ='Filmes';

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
  listaFilmes: IListaFilmes;
  generos: string[] = [];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,

    public router: Router) {}

    buscarFilmes(evento: any) {
      console.log(evento.target.value);
      const busca = evento.target.value;
      if (busca && busca.trim() !=='') {
          this.filmeService.buscarFilmes(busca).subscribe(dados => {
            console.log(dados);
            this.listaFilmes=dados;
          });
    }
  }
    exibirFilme(filme: IFilmeApi){
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
  ngOnInit(){
    this.generoService.buscarGeneros().subscribe( dados =>{
      console.log('Generos: ',dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
    });
    this.dadosService.guardaDados('generos',this.generos);
  });
}
}

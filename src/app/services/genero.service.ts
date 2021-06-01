import { IListaGenero } from './../../../platforms/android/app/models/IGenero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua='pt-br';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key='?api_key=fe977b9170d98b4e6fd8a459f1f0cbad';

  constructor(private http: HttpClient, public toastController: ToastController) { }

 buscarGeneros(): Observable<IListaGenero>{
  const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
 }
async exibirErro(erro: any) {
  const toast=await this.toastController.create({
  message:'Erro ao conectar a API!.',
  duration:2000,
  color:'danger',
  position:'middle'
  });
  toast.present();
  return null;
}

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadserieService {

   private serie: any =[];

  constructor() {  }
  guardarDados(index: string, serie: any ) {
    if (index) {
      this.serie[index]= serie;
      return true;
    }
    else {
      return false;
    }
  }

  pegarDados(index: string): any {
   if (index) {
     return this.serie[index];
  }
  else{
    return null;
  }
  }
  deletarDados(index: string): boolean {
     return delete this.serie[index];
  }

}


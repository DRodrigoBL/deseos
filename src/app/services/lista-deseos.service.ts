import {Injectable} from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
    console.log("servicio creado...");

    this.cargarData();
  }

  actualizarData(){
    localStorage.setItem( "data" , JSON.stringify(this.listas) );
  }

  cargarData(){
    if(JSON.parse( localStorage.getItem( "data" ))) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  agregarLista( lista:Lista ){
    this.listas.push( lista );
    this.actualizarData();
  }

}

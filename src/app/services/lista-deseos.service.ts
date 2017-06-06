import {Injectable} from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
    console.log("servicio creado...");

    /*let lista1 = new Lista('Compras de supermercado');
    let lista2 = new Lista('Juegos que deseo');
    let lista3 = new Lista('Cosas de la universidad');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);*/
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes : string[] = [];
  constructor() { }

  AgregarMensaje(mensaje : string){
    this.mensajes.push(mensaje);
  }

  Limpiar(){
    this.mensajes = [];
  }
}

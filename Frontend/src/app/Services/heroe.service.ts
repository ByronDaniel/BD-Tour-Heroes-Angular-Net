import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../data-heroes';
import { IHeroe } from '../Models/IHeroe';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private heroesUrl = "https://localhost:7100/api/Heroes";
  constructor(private mensajeService : MensajeService, private http : HttpClient) { }

  getHeroes() : Observable<IHeroe[]> {
    this.mensajeService.AgregarMensaje("Obteniendo Heroes");
    return this.http.get<IHeroe[]>(this.heroesUrl);
  }
  getHeroe(id : number) : Observable<IHeroe | undefined> {
    this.mensajeService.AgregarMensaje(`Obteniendo Heroe ${id}`);
    return this.http.get<IHeroe>(`${this.heroesUrl}/${id}`);
  }
}

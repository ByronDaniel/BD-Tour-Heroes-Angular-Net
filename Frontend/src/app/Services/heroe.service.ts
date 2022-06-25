import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../data-heroes';
import { IHeroe } from '../Models/IHeroe';
import { IResponse } from '../Models/IResponse';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private heroesUrl = "https://localhost:7098/api/heroe";
  constructor(private mensajeService : MensajeService, private http : HttpClient) { }

  getHeroes() : Observable<IResponse> {
    this.mensajeService.AgregarMensaje("Obteniendo Heroes");
    return this.http.get<IResponse>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<IResponse>("Obteniendo Heroes"))
    );
  }
  getHeroe(id : number) : Observable<IResponse> {
    this.mensajeService.AgregarMensaje(`Obteniendo Heroe ${id}`);
    return this.http.get<IResponse>(`${this.heroesUrl}/${id}`)
    .pipe(
      catchError(this.handleError<IResponse>("Obteniendo Heroe"))
    );
  }
  
  postHeroe(heroe : IHeroe) : Observable<IResponse>{
    this.mensajeService.AgregarMensaje(`Guardando Heroe Nuevo`);
    return this.http.post<IResponse>(`${this.heroesUrl}`,heroe)
    .pipe(
      catchError(this.handleError<IResponse>("Guardando Heroe"))
    );
  }

  updateHeroe(heroe : IHeroe) : Observable<IResponse>{
    this.mensajeService.AgregarMensaje(`Actualizando Heroe ${heroe.id}`);
    return this.http.put<IResponse>(`${this.heroesUrl}`,heroe)
    .pipe(
      catchError(this.handleError<IResponse>("Actualizando Heroe"))
    );
  }

  deleteHeroe(id : number){
    this.mensajeService.AgregarMensaje(`Eliminando Heroe ${id}`);
    return this.http.delete<IResponse>(`${this.heroesUrl}/${id}`)
    .pipe(
      catchError(this.handleError<IResponse>("Eliminando Heroe"))
    )
  }

  handleError<T>(operacion?: string) {
    return (error: any): Observable<T> => {
      if(!error.error.isSuccess){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: error.error.displayMessage,
          showConfirmButton: false,
          timer: 1500
        });
        this.mensajeService.AgregarMensaje(`Error ${operacion}: ${error.error.displayMessage}`);
      }
      return of(error as T);
    };
  }
}

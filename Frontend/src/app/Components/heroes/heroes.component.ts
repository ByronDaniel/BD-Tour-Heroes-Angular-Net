import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data-heroes';
import { IHeroe } from 'src/app/Models/IHeroe';
import { IResponse } from 'src/app/Models/IResponse';
import { HeroeService } from 'src/app/Services/heroe.service';
import { MensajeService } from 'src/app/Services/mensaje.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  response!: IResponse;
  heroes! : IHeroe[];
  heroeSeleccionado!: IHeroe;
  heroeNuevo!: IHeroe;
  constructor(private heroeService : HeroeService, private mensajeService : MensajeService, private location : Location) { }

  ngOnInit(): void {
    this.heroes = [];
    this.obtenerHeroes();
  }
  seleccionarHeroe(heroe : IHeroe, event : any):void{
    this.mensajeService.AgregarMensaje(`Heroe seleccionado ${heroe.id} ${heroe.nombre}`)
    this.heroeSeleccionado= heroe;
    event.stopPropagation();
  }
  agregarHeroe(heroe : IHeroe){
    if(this.heroes == null || this.heroes.length == 0){
      window.location.reload();
    }
      this.heroes.push(heroe);
  }
  obtenerHeroes(){
    this.heroeService.getHeroes().subscribe(response=>{
      this.heroes = response.result;
    });
  }
  eliminar(id : number){
    let heroeFind : IHeroe = this.heroes.find(heroe => heroe.id == id)!;
    Swal.fire({
      title: 'Estás seguro eliminar el heroe?',
      text: heroeFind.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroeService.deleteHeroe(id!).subscribe(response=>{
          this.heroes = this.heroes.filter(heroe => heroe != heroeFind);
          Swal.fire(
            'Eliminado!',
            'Heroe Eliminado.',
            'success'
          )
        });
      }
    });
  }
}

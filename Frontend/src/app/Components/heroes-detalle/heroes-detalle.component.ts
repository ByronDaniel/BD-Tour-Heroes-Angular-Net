import { Component, Input, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/Models/IHeroe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroeService } from 'src/app/Services/heroe.service';
import { IResponse } from 'src/app/Models/IResponse';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-heroes-detalle',
  templateUrl: './heroes-detalle.component.html',
  styleUrls: ['./heroes-detalle.component.css']
})
export class HeroesDetalleComponent implements OnInit {
  heroeSeleccionado!: IHeroe;
  response! : IResponse;
  constructor( 
    private route: ActivatedRoute,
    private heroeService: HeroeService,
    private location: Location) { }

  ngOnInit(): void {
    this.obtenerHeroe();
  }
  obtenerHeroe(): void{
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.heroeService.getHeroe(id).subscribe(response=> this.heroeSeleccionado = response.result);
  }
  editar(heroe: IHeroe): void {
    Swal.fire({
      title: 'Estás seguro que deseas editar el heroe?',
      text: heroe.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroeService.updateHeroe(heroe).subscribe(response => {
          Swal.fire(
            'Editado!',
            'Heroe Editado.',
            'success'
          )
          this.location.back();
        });
      }
    });
    
  }
}

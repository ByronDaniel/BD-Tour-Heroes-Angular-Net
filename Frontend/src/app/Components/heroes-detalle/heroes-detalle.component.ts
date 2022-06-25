import { Component, Input, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/Models/IHeroe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroeService } from 'src/app/Services/heroe.service';
@Component({
  selector: 'app-heroes-detalle',
  templateUrl: './heroes-detalle.component.html',
  styleUrls: ['./heroes-detalle.component.css']
})
export class HeroesDetalleComponent implements OnInit {
  heroeSeleccionado!: IHeroe;
  constructor( 
    private route: ActivatedRoute,
    private heroeService: HeroeService,
    private location: Location) { }

  ngOnInit(): void {
    this.obtenerHeroe();
  }
  obtenerHeroe(): void{
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.heroeService.getHeroe(id).subscribe(heroe=> this.heroeSeleccionado = heroe!);
  }
  goBack(): void {
    this.location.back();
  }
}

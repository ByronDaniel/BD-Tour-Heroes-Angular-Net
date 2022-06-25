import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data-heroes';
import { IHeroe } from 'src/app/Models/IHeroe';
import { HeroeService } from 'src/app/Services/heroe.service';
import { MensajeService } from 'src/app/Services/mensaje.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : IHeroe[] = [];
  heroeSeleccionado!: IHeroe;
  constructor(private heroeService : HeroeService, private mensajeService : MensajeService) { }

  ngOnInit(): void {
    this.obtenerHeroes();
  }
  seleccionarHeroe(heroe : IHeroe):void{
    this.mensajeService.AgregarMensaje(`Heroe seleccionado ${heroe.id} ${heroe.nombre}`)
    this.heroeSeleccionado= heroe;
  }
  obtenerHeroes(){
    this.heroeService.getHeroes().subscribe(heroes=>this.heroes = heroes)
  }
}

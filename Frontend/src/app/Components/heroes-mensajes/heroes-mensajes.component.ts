import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/Services/mensaje.service';

@Component({
  selector: 'app-heroes-mensajes',
  templateUrl: './heroes-mensajes.component.html',
  styleUrls: ['./heroes-mensajes.component.css']
})
export class HeroesMensajesComponent implements OnInit {

  constructor(public mensajeService : MensajeService) { }

  ngOnInit(): void {
  }

}

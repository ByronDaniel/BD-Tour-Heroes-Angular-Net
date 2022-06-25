import { Component, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/Models/IHeroe';
import { HeroeService } from 'src/app/Services/heroe.service';
import { Location } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes-agregar',
  templateUrl: './heroes-agregar.component.html',
  styleUrls: ['./heroes-agregar.component.css']
})
export class HeroesAgregarComponent implements OnInit {
  heroe : IHeroe = {
    nombre: "",
    imagen: "",
    descripcion: ""
  };
  @Output() heroeCreado =  new EventEmitter<IHeroe>();
  constructor(private heroeService: HeroeService, private location: Location) { }

  ngOnInit(): void {
  }
  agregar(){
    let validarUrl = new RegExp(/(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i);
    if(validarUrl.test(this.heroe.imagen.toLowerCase())){
      this.heroeService.postHeroe(this.heroe).subscribe(response => {
        this.heroeCreado.emit(response.result);
        this.heroe = {
          nombre: "",
          descripcion: "",
          imagen: ""
        }
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.displayMessage,
          showConfirmButton: false,
          timer: 1500
        })

      });
    }else{
      console.log("validar url imagen");
    }
    
  }
}

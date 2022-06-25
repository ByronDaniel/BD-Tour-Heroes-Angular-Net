import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroesDetalleComponent } from './Components/heroes-detalle/heroes-detalle.component';
import { HeroesMensajesComponent } from './Components/heroes-mensajes/heroes-mensajes.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesTopComponent } from './Components/heroes-top/heroes-top.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetalleComponent,
    HeroesMensajesComponent,
    HeroesTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

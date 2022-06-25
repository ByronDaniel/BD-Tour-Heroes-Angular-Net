import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetalleComponent } from './Components/heroes-detalle/heroes-detalle.component';
import { HeroesTopComponent } from './Components/heroes-top/heroes-top.component';
import { HeroesComponent } from './Components/heroes/heroes.component';

const routes: Routes = [
  {path: '', redirectTo:'/heroes-top', pathMatch: 'full'},
  {path:'heroes', component: HeroesComponent},
  {path:'heroes-top', component: HeroesTopComponent},
  {path: 'heroes-top/detalle/:id', component:HeroesDetalleComponent},
  {path: 'heroes/detalle/:id', component:HeroesDetalleComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

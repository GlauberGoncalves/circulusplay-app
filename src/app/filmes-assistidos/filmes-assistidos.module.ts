import { ListaDeFilmesComponent } from './../components/lista-de-filmes/lista-de-filmes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilmesAssistidosPage } from './filmes-assistidos.page';

const routes: Routes = [
  {
    path: '',
    component: FilmesAssistidosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeFilmesComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [FilmesAssistidosPage]
})
export class FilmesAssistidosPageModule {}

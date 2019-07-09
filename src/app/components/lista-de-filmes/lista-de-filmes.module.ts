import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListaDeFilmesComponent } from './lista-de-filmes.component';

@NgModule({
    declarations: [ListaDeFilmesComponent],
    exports: [ListaDeFilmesComponent],
    imports: [CommonModule, IonicModule]
})
export class PostModule { }
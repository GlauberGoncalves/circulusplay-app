import { PostModule } from './post/post.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ListaDeFilmesComponent } from './lista-de-filmes/lista-de-filmes.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,    
    PostModule 
  ],
  exports:[
    PostComponent,
    ListaDeFilmesComponent
  ]
})
export class ComponentsModule { }

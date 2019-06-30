import { PostModule } from './post/post.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,    
    PostModule 
  ],
  exports:[
    PostComponent
  ]
})
export class ComponentsModule { }

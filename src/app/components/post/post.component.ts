import { API_CONFIG } from './../../config/api.config';
import { Postagem } from './../../models/postagem.model';
import { Component, OnInit, Input } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  
  @Input() postagem: Postagem;  
  imagemFilme: String = '';


  constructor(
    private router:NavController,    
  ) { }

  ngOnInit() {
    if(this.postagem.filmeAssistido != null){
      this.imagemFilme = API_CONFIG.urlImage + "/" + this.postagem.filmeAssistido['filme'].imagemPoster;
      console.log(this.imagemFilme);
      console.log(this.postagem);
    }
  }

  abrirComentarios(){
    this.router.navigateForward([`/comentarios/${this.postagem.id}`]);
  }

}

import { API_CONFIG } from './../../config/api.config';
import { Postagem } from './../../models/postagem.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  
  @Input() postagem: Postagem;  
  imagemFilme: String;


  constructor() { }

  ngOnInit() {
    this.imagemFilme = API_CONFIG.urlImage + "/" + this.postagem.filmeAssistido.imagemPoster;    
    console.log(this.postagem)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostagemService } from './../services/postagem.service';
import { Comentario } from '../models/comentario.model';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
  providers : [PostagemService]
})
export class ComentariosPage implements OnInit {

  private comentarios: Array<Comentario>;

  constructor(
    private route: ActivatedRoute,
    private service: PostagemService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res.id);

      this.service.findById(res.id).subscribe(post => {
        this.comentarios = post.comentarios;
      });

    });
  }
}
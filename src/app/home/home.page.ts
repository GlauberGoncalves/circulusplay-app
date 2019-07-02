import { Postagem } from './../models/postagem.model';
import { Component } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { Feed } from '../models/feed.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [FeedService]
})
export class HomePage {

  postagens: Array<Postagem>;

  constructor(private feed: FeedService) {
    
    this.feed.getFeed()
      .subscribe(response => {            
        this.postagens =  response.postagens;
    },
    error => {});
  }

}

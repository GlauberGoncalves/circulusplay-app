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

  constructor(private feed: FeedService) {
    
    this.feed.getFeed()
      .subscribe(response => {
        console.log(response);
    },
    error => {});
  }

}

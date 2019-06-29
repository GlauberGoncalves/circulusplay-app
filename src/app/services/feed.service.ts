import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feed } from '../models/feed.model';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class FeedService {

    constructor(public http: HttpClient) {

    }    

    getFeed() {
        return this.http.get<Feed>(`${API_CONFIG.baseUrl}/feed`);
    }
}
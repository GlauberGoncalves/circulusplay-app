import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_CONFIG } from '../config/api.config';
import { Postagem } from '../models/postagem.model';

@Injectable()
export class PostagemService {

    constructor(public http: HttpClient) {

    }    

    findById(id:number) {
        return this.http.get<Postagem>(`${API_CONFIG.baseUrl}/postagens/${id}`);
    }
}
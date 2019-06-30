import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './storage.service';
import { API_CONFIG } from '../config/api.config';
import { UsuarioLocal } from '../models/usuario-local.model';
import decode from 'jwt-decode';

@Injectable()
export class AuthService {

  constructor(
    public http: HttpClient, 
    public storage: StorageService
  ) { }


  authenticate(creds : Credenciais) {
    return this.http.post(
        `${API_CONFIG.baseUrl}/auth`, 
        creds,
        {
            observe: 'response',
            responseType: 'text'
        });
  }

  sucessoLogin(autorizacao : string) {
    return new Promise(resolve => {
      console.log(autorizacao)      
      let user : UsuarioLocal = {
          token: autorizacao,
          email: decode(autorizacao)
      };
      this.storage.setLocalUser(user);
      resolve(true);
    })
  }
}
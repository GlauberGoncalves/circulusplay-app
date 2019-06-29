import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

import { UsuarioLocal } from '../app/models/usuario-local.model';
import { NavController } from '@ionic/angular';
import { LoginPage } from './login/login.page';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private autenticacao: AuthService,
        private storage: StorageService,
        private navigate:NavController
        ) {}

    canActivate(): boolean {
        let usuario: UsuarioLocal = this.storage.getLocalUser();
        console.log(usuario);
        if (usuario){            
            return true;
        }        
        this.navigate.navigateRoot(['login']);
        return true;
    }
}
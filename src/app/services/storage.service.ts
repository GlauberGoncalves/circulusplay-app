import { UsuarioLocal } from '../models/usuario-local.model';
import { STORAGE_KEYS } from '../config/storage_keys.config';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    getLocalUser() : UsuarioLocal {
        let usr = localStorage.getItem(STORAGE_KEYS.usuarioLocal);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj : UsuarioLocal) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.usuarioLocal);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.usuarioLocal, JSON.stringify(obj));
        }
    }
}
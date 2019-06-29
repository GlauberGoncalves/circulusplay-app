import { Usuario } from './usuario.model';
import { Postagem } from './postagem.model';

export interface Feed {
    
    usuario : Usuario;
	amigos : Array<Usuario>;
	postagens : Array<Postagem>;

}


import { Filme } from './filme.model';
import { Usuario } from './usuario.model';
import { ComentarioPostagem } from './comentario-postagem';

export interface Postagem {
    
    id : number;
	instante : Date;
	titulo: String;
	filmeAssistido : Filme;
	comentarios: Array<ComentarioPostagem>;
	postadoPor: Usuario;

}
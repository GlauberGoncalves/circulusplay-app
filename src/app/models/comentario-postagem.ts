
import { Comentario } from './comentario.model';
import { Postagem } from './postagem.model';

export interface ComentarioPostagem extends Comentario {
        
    postagem : Postagem;

}







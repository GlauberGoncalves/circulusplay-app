import { Comentario } from './comentario.model';
import { Filme } from './filme.model';

export interface ComentarioFilme extends Comentario {
    
    filme : Filme;	

}





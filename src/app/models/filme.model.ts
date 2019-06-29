import { Genero } from './genero.model';
import { ComentarioFilme } from './comentario-filme.model';

export interface Filme {
    
    id: number;
    titulo : String;
    sinopse : String ;
    adulto : boolean;
    imagemFundo: String;
    imagemPoster : String;
    dataLancamento : Date;
    votos : number;
    generos : Array<Genero>;
    comentarios: Array<ComentarioFilme>;

}


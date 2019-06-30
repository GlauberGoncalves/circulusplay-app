import { Postagem } from './postagem.model';
import { Comentario } from './comentario.model';
import { FilmeAssistido } from './FilmeAssistido.model';
import { Notificacao } from './notificacao.model';


export interface Usuario {
    
	id : number;
    nome : String;
    sobrenome : String
	email : String;
	nascimento : Date;		
	filmesAssistidos : Array<FilmeAssistido>;
	amigos : Array<Usuario>;
	comentarios : Array<Comentario>;
	postagens : Array<Postagem>;
	notivicacoes : Array<Notificacao>

}





import { Filme } from './filme.model';
import { Usuario } from './usuario.model';
import { Qualificacao } from './enums/qualificacao.model';


export interface FilmeAssistido{

	id : number;
	usuario : Usuario;	
	filme : Filme;
	qualificacao : Qualificacao;
	data : Date;
}

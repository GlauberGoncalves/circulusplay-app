import { Usuario } from './usuario.model';

export interface Notificacao{
    id : number;
	usuario : Usuario
	seguirAmigo : Usuario;		
	instante : Date;
	dataResposta : Date;
	respostaAmigo : boolean;
}
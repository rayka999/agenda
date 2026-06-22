import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos:Contato[]
  constructor(){
    this.#contatos=[]
  }

  existe(c:Contato): boolean{
    return this.#contatos.some(contato => contato.email==c.email)
  }

  adicionar(c:Contato) : boolean{
    if(!this.existe(c)){
      this.#contatos.push(c)
      return true;
    } else{
      return false;
    }
  }

  remover (c:Contato): boolean{
    if(c){
      let index=this.#contatos.findIndex (contato => contato.email==c.email)
      this.#contatos.splice(index,1)
      return true;
    } else{
      return false;
    }
  }

  obterTodos(): Contato[]{
    return[...this.#contatos]
  }
}

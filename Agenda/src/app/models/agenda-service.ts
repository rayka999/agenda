import { Injectable } from '@angular/core';
import { Contato, TipoContato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[];

  constructor() {
    this.#contatos = [];
  }

  existe(c: Contato): boolean {
    return this.#contatos.some(contato => contato.email === c.email);
  }

  adicionar(c: Contato): boolean {
    if (!this.existe(c)) {
      this.#contatos.push(c);
      return true;
    }
    return false;
  }

  remover(c: Contato): boolean {
    const index = this.#contatos.indexOf(c);

    if (index !== -1) {
      this.#contatos.splice(index, 1);
      return true;
    }

    return false;
  }

  obterTodos(): Contato[] {
    return this.#contatos;
  }

  quantidadePorTipo(tipo: TipoContato): number {
    return this.#contatos.filter(
      contato => contato.tipo === tipo
    ).length;
  }

  totalContatos(): number {
    return this.#contatos.length;
  }
}
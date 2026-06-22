import { Component, inject } from '@angular/core';
import { AgendaService } from '../models/agenda-service';
import { TipoContato } from '../models/contato';

@Component({
  selector: 'app-resumo-contatos',
  templateUrl: './resumo-contatos.html',
  styleUrl: './resumo-contatos.scss',
})
export class ResumoContatos {

  #AgendaService=inject(AgendaService)

  get qtdAmigos(): number {
    return this.#AgendaService.quantidadePorTipo(
      TipoContato.AMIGO
    );
  }

  get qtdFamilia(): number {
    return this.#AgendaService.quantidadePorTipo(
      TipoContato.FAMILIA
    );
  }

  get qtdTrabalho(): number {
    return this.#AgendaService.quantidadePorTipo(
      TipoContato.TRABALHO
    );
  }

  get qtdOutro(): number {
    return this.#AgendaService.quantidadePorTipo(
      TipoContato.OUTRO
    );
  }

  get total(): number {
    return this.#AgendaService.totalContatos();
  }
}
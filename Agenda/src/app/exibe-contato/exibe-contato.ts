import { Component, inject } from '@angular/core';
import { AgendaService } from '../models/agenda-service';
import { Contato } from '../models/contato';

@Component({
  selector: 'app-exibe-contato',
  imports: [],
  templateUrl: './exibe-contato.html',
  styleUrl: './exibe-contato.scss',
})
export class ExibeContato {
  #AgendaService=inject(AgendaService)
  protected readonly contatos:Contato[]=[]
  constructor(){
    this.contatos=this.#AgendaService.obterTodos()
  }
}

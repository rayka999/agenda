import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Contato, TipoContato } from '../models/contato';
import { AgendaService } from '../models/agenda-service';

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContato {
  #AgendaService=inject(AgendaService);

  protected contatos: Contato[] = [];

  protected tipos = Object.values(TipoContato);

  #formBuilder = inject(FormBuilder);

  protected formContato: FormGroup;

  constructor() {

    this.formContato = this.#formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aniversario: ['', Validators.required],
      tipo: ['', Validators.required]
    });

  }

   adicionarContato(){
    if (this.formContato.invalid) {
      this.formContato.markAllAsTouched();
      return;
    }
    const dados = this.formContato.value;
    const novoContato = new Contato(
      dados.nome,
      dados.telefone,
      dados.email,
      dados.aniversario,
      dados.tipo
    );
    this.#AgendaService.adicionar(novoContato)
    this.formContato.reset();
  }
}
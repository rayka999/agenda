import { Component } from '@angular/core';
import { AdicionaContato } from './adiciona-contato/adiciona-contato';
import { ExibeContato } from './exibe-contato/exibe-contato';
import { ResumoContatos } from './resumo-contatos/resumo-contatos';

@Component({
  selector: 'app-root',
  imports: [AdicionaContato,ExibeContato, ResumoContatos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
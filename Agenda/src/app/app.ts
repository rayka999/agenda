import { Component } from '@angular/core';
import { AdicionaContato } from './adiciona-contato/adiciona-contato';
import { ExibeContato } from './exibe-contato/exibe-contato';

@Component({
  selector: 'app-root',
  imports: [AdicionaContato,ExibeContato],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
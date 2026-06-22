export enum TipoContato {
  AMIGO = 'Amigo(a)',
  FAMILIA = 'Família',
  TRABALHO = 'Trabalho',
  OUTRO = 'Outro'
}

export class Contato {
  nome: string;
  telefone: string;
  email: string;
  aniversario: Date;
  tipo: TipoContato;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    aniversario: Date,
    tipo: TipoContato
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  }
  public getNome(): string {
    return this.nome;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  public getEmail(): string {
    return this.email;
  }

  public getAniversario(): Date {
    return this.aniversario;
  }

  public getTipo(): TipoContato {
    return this.tipo;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setAniversario(aniversario: Date): void {
    this.aniversario = aniversario;
  }

  public setTipo(tipo: TipoContato): void {
    this.tipo = tipo;
  }
}
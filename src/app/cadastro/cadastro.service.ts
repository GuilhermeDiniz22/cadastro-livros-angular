import { Injectable } from '@angular/core';
import { Cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private cadastros: Cadastro[] = [];
  private lastId: number = 0; // Inicializa com 0

  constructor() {
    const cadastrosSalvos = localStorage.getItem('cadastros');
    this.cadastros = cadastrosSalvos ? JSON.parse(cadastrosSalvos) : [];

    // Se houver cadastros, atualiza o lastId com o maior ID existente
    if (this.cadastros.length > 0) {
      this.lastId = Math.max(...this.cadastros.map(c => c.id || 0)); // Garante que IDs inválidos sejam ignorados
    }
  }

  getAllCadastros(): Cadastro[] {
    return this.cadastros;
  }

  getCadastroById(id: number): Cadastro | undefined {
    return this.cadastros.find(a => a.id === id);
  }

  novoCadastro(cadastro: Cadastro): void {
    // Incrementa o lastId e define como ID do novo cadastro
    this.lastId++;
    cadastro.id = this.lastId;

    this.cadastros.push(cadastro);

    alert('Cadastro adicionado com sucesso!');

    console.log(this.cadastros);

    localStorage.setItem('cadastros', JSON.stringify(this.cadastros));
  }

  removerCadastro(id: number): void {
    const index = this.cadastros.findIndex(a => a.id === id);

    if (index !== -1) {
      this.cadastros.splice(index, 1);
      localStorage.setItem('cadastros', JSON.stringify(this.cadastros));
      alert('Cadastro removido com sucesso!');
    } else {
      alert('Cadastro não encontrado!');
    }
  }

  editarCadastro(id: number, edicao: Cadastro): void {
    const index = this.cadastros.findIndex(a => a.id === id);

    if (index !== -1) {
      this.cadastros[index] = edicao;
      localStorage.setItem('cadastros', JSON.stringify(this.cadastros));
      alert('Cadastro editado com sucesso!');
    } else {
      alert('Cadastro não encontrado!');
    }
  }
}

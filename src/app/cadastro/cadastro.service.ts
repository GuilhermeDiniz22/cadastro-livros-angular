import { Injectable } from '@angular/core';
import { Cadastro } from '../models/cadastro';
@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private cadastros:Cadastro [] = [];

  constructor(){
    let cadastrosSalvos = localStorage.getItem('cadastros');
    this.cadastros = cadastrosSalvos ? JSON.parse(cadastrosSalvos) : [];
  }

  getAllCadastros():Cadastro[]{
    return this.cadastros;
  }

  getCadastroById(id : string):Cadastro|undefined{
    return this.cadastros.find(a => a.id === id);
  }

  novoCadastro(cadastro : Cadastro):void{

    cadastro.id = Date.now().toString();
    
    this.cadastros.push(cadastro);

    alert('cadastro adicionado com sucesso!')

    console.log(this.cadastros);

    localStorage.setItem('cadastros', JSON.stringify(this.cadastros));

  }

  removerCadastro(id: string):void{
    let cadastro = this.cadastros.findIndex((a) => a.id === id);

    if(cadastro !== null) alert('cadastro removido com sucesso!')

    this.cadastros.splice(cadastro, 1);
    localStorage.setItem('cadastros', JSON.stringify(this.cadastros));
  }

  editarCadastro(edicao : Cadastro) : void{
    let index = this.cadastros.findIndex((a) => a.id === edicao.id);

    this.cadastros[index] = edicao;
    localStorage.setItem('cadastros', JSON.stringify(this.cadastros));
  }
 
}

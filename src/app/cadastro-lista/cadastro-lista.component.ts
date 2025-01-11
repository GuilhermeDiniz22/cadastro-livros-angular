import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.service'
import { Cadastro } from '../models/cadastro';

@Component({
  selector: 'app-cadastro-lista',
  templateUrl: './cadastro-lista.component.html',
  standalone: false,
  styleUrl: './cadastro-lista.component.css'
})
export class CadastroListaComponent implements OnInit{

  cadastros : Cadastro[] = [];

  constructor(private service : CadastroService){

  }

  ngOnInit(): void {
    this.cadastros = this.service.getAllCadastros();
  }

  removerCadastro(id:string){
    this.service.removerCadastro(id);
  }


}

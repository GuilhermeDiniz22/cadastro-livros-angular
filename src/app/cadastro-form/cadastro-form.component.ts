import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../cadastro/cadastro.service';
import { Cadastro } from '../models/cadastro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  standalone: false,
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})

export class CadastroFormComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder, 
    private cadastroService : CadastroService, 
    private router : Router) {}

  ngOnInit(): void {
    this.cadastroForm = this.formbuilder.group({
      titulo: ['', Validators.required],
      editora: ['', Validators.required],
      aluguel: ['', Validators.required],
      entrega: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  enviar(): void {
    if (this.cadastroForm.valid) {
      let novoCadastro : Cadastro = this.cadastroForm.value;

      this.cadastroService.novoCadastro(novoCadastro);

      this.router.navigate(['/listar']);
    } else {
      console.log('Formulário inválido');
    }
  }
}

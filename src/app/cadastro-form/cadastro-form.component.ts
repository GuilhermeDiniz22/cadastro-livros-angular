import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../cadastro/cadastro.service';
import { Cadastro } from '../models/cadastro';

@Component({
  selector: 'app-cadastro-form',
  standalone: false,
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})

export class CadastroFormComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder, private cadastroService : CadastroService) {}

  ngOnInit(): void {
    this.cadastroForm = this.formbuilder.group({
      tituloLivro: ['', Validators.required],
      editoraLivro: ['', Validators.required],
      dataDeAluguel: ['', Validators.required],
      dataDeEntrega: ['', Validators.required],
      nomeSocio: ['', Validators.required],
      sobrenomeSocio: ['', Validators.required],
      emailSocio: ['', [Validators.required, Validators.email]],
    });
  }

  enviar(): void {
    if (this.cadastroForm.valid) {
      let novoCadastro : Cadastro = this.cadastroForm.value;

      this.cadastroService.novoCadastro(novoCadastro);
    } else {
      console.log('Formulário inválido');
    }
  }
}

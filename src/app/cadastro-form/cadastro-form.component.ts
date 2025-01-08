import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-form',
  standalone: false,
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})

export class CadastroFormComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder) {}

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
      console.log('Formulário válido:', this.cadastroForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}

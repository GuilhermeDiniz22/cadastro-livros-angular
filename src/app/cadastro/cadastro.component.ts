import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroFormComponent } from '../cadastro-form/cadastro-form.component';
import { CadastroListaComponent } from '../cadastro-lista/cadastro-lista.component';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, CadastroFormComponent, CadastroListaComponent, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}

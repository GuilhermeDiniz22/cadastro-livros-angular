import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFormComponent } from '../cadastro-form/cadastro-form.component';
import { CadastroListaComponent } from '../cadastro-lista/cadastro-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    CadastroFormComponent, CadastroListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CadastroModule { }

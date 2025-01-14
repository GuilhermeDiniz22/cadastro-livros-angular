import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastroListaComponent } from './cadastro-lista/cadastro-lista.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "novo", component: CadastroFormComponent },
    { path: "listar", component: CadastroListaComponent },
    { path: "editar/:id", component: CadastroFormComponent },
];

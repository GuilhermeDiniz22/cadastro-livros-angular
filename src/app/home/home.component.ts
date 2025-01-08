import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadastroModule } from '../cadastro/cadastro.module';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CadastroModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pesquisa',  component: PessoaComponent }
];

@NgModule({
  declarations: [PessoaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PessoaModule { }

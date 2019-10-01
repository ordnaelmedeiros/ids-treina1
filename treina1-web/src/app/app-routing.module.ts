import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'municipio',
    loadChildren: () => import('./programas/municipio/municipio.module').then(mod => mod.MunicipioModule),
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./programas/pessoa/pessoa.module').then(mod => mod.PessoaModule),
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then(mod => mod.PaginaInicialModule),
  },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

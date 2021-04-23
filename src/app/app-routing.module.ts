import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheSobreTesteComponent } from './pages/detalhe-sobre-teste/detalhe-sobre-teste.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'detalhes-sobre-teste',
    component: DetalheSobreTesteComponent,
  },
] 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

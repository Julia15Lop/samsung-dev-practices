import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
      },
      {
        path: 'form',
        loadChildren: () => import('./signin/signin.module').then( m => m.SigninModule )
      },
      {
        path: '404',
        component: ErrorPageComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

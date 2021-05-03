import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component'

const routes: Routes = [
  {
    path: '',
    children: [
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
        redirectTo: 'form'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

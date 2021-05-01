import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent},
  { path: 'users', component: ListUsersComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

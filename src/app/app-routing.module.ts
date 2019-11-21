import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [
{path: 'products', component: ProductsListComponent},
{path: 'users', component: UsersListComponent},
{path: 'users/:id', component: UserDetailsComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'login', component: LoginComponent},
{path: '', redirectTo: 'welcome', pathMatch: 'full'},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

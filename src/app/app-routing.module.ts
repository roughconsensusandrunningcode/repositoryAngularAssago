import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
{path: 'products', component: ProductsListComponent},
{path: 'users', component: UsersListComponent},
{path: '', redirectTo: 'users', pathMatch: 'full'},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

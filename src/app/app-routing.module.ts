import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { LoginComponent } from './shared/login/login.component';
import { PostsListComponent } from './placeholder/posts-list/posts-list.component';
import { MyFirstGuard } from './shared/guards/my-first-guard';
import { MySecondGuard } from './shared/guards/my-second-guard';


const routes: Routes = [
{path: 'products', component: ProductsListComponent, canActivate: [MyFirstGuard, MySecondGuard]},
{path: 'users', component: UsersListComponent, canActivate: [MyFirstGuard]},
{path: 'users/:id', component: UserDetailsComponent, canActivate: [MyFirstGuard]},
{path: 'welcome', component: WelcomeComponent, canActivate: [MyFirstGuard]},
{path: 'posts', component: PostsListComponent, canActivate: [MyFirstGuard]},
{path: 'login', component: LoginComponent},
{path: '', redirectTo: 'welcome', pathMatch: 'full'},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

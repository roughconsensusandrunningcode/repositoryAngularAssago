import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './shared/my-header/my-header.component';
import { MyFooterComponent } from './shared/my-footer/my-footer.component';
import { MyMenuComponent } from './shared/my-menu/my-menu.component';
import { MyMainComponent } from './shared/my-main/my-main.component';
import { EsempioComponent } from './shared/esempio/esempio.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { LoginComponent } from './shared/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from './placeholder/posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyMenuComponent,
    MyFooterComponent,
    MyMainComponent,
    EsempioComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    UsersListComponent,
    NotFoundComponent,
    UserDetailsComponent,
    WelcomeComponent,
    LoginComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

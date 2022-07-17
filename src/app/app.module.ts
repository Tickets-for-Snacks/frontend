import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './allMenu/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './mainPages/home/home.component';
import { AboutusComponent } from './mainPages/aboutUs/aboutus.component';
import { ContactComponent } from './mainPages/contact/contact.component';
import { RegisterComponent } from './mainPages/register/register.component';
import { ProductComponent } from './product/product.component';
import { CategoriaEditComponent } from './profile/user-category/categoria-edit.component';
import { MenuAfterLoginComponent } from './allMenu/menu-after-login/menu-after-login.component';
import { UserProductComponent } from './profile/user-product/user-product.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './mainPages/login/login.component';
import { ProfileComponent } from './profile/user-profile/profile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { PagTicketComponent } from './product/pag-ticket/pag-ticket.component';
import { OrderModule } from 'ngx-order-pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    CategoriaEditComponent,
    MenuAfterLoginComponent,
    ProfileComponent,
    UserProductComponent,
    PagTicketComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, OrderModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

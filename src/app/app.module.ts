import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { ProfileComponent } from './profile/user-profile/profile.component';
import { LoginComponent } from './mainPages/login/login.component';




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
    UserProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

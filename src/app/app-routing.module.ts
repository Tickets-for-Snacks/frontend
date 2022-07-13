import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './mainPages/aboutUs/aboutus.component';
import { ContactComponent } from './mainPages/contact/contact.component';
import { HomeComponent } from './mainPages/home/home.component';
import { LoginComponent } from './mainPages/login/login.component';
import { RegisterComponent } from './mainPages/register/register.component';
import { ProductComponent } from './product/product.component';
import { CategoriaEditComponent } from './profile/user-category/categoria-edit.component';
import { UserProductComponent } from './profile/user-product/user-product.component';
import { ProfileComponent } from './profile/user-profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },

  { path: 'categoria-edit', component: CategoriaEditComponent },

  { path: 'profile/:id', component: ProfileComponent },
  { path: 'user-product', component: UserProductComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

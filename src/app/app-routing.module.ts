import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutUs/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserProductComponent } from './user-product/user-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },

  { path: 'categoria-edit', component: CategoriaEditComponent },
  { path: 'produto-edit', component: ProdutoEditComponent },
  { path: 'usuario-edit', component: UsuarioEditComponent },
  { path: 'categoria-delete', component: CategoriaDeleteComponent },
  { path: 'produto-delete', component: ProdutoDeleteComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'user-product', component: UserProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

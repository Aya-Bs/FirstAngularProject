import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQPCategoryComponent } from './products-qpcategory/products-qpcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';

const routes: Routes = [
  {path : "home" , component : HomeComponent , children:
    [
      {path:"getdetails", component:DetailsCategoryComponent}
    ]},
    {path : "add", component : AddProductComponent},
    {path : "addreactive", component : AddProductReactiveComponent},

    {path :"" , redirectTo : "home" , pathMatch : "full"}, //redirige vers la page d'accueil
    //chaine vide nous redirige vers la page spédifiée dans redirectTo
    //pathMatch : "full" signifie que le chemin doit correspondre exactement à la route
    //pathParam : permet de passer des paramètres dans l'url
    {path:"details/:id", component:ProductsCategoryComponent},
    //queryParam : permet de passer des paramètres dans l'url
    {path:"details", component:ProductsQPCategoryComponent},
    {
      path:'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)//lorsqu'on a le path contact, on charge le module contact
    },
    {
      path:'apropos',
      loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule)
    },
    {path : "**" , component : NotFoundComponent} //n'importe quelle url qui n'est pas définie dans les routes
    //la priorité est donnée à la première route qui matche

  
];

//définit les routes de l'application
//generé lors de la création du projet
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//allows navigation between components using urls and also allows to pass data between components


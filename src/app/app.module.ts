import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQPCategoryComponent } from './products-qpcategory/products-qpcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { CardComponent } from './card/card.component';
import { ListProductsComponent } from './list-products/list-products.component';
import{  HttpClientModule } from '@angular/common/http';

@NgModule({//NgModule is a decorator that defines a module 
  //il n'est pas visible //il s'accupe de l'organisation des composants//ensemble de composants
  declarations: [
    //liste des composants qui sont dans le module
    //mis a jour a chaque fois qu'on ajoute un composant
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ProductsComponent,
    ContainsPipe,
    HighlightDirective,
    NotFoundComponent,
    ProductsCategoryComponent,
    ProductsQPCategoryComponent,
    DetailsCategoryComponent,
    AddProductComponent,
    AddProductReactiveComponent,
    CardComponent,
    ListProductsComponent
  ],
  imports: [//tgese are the modules that are required by the components mentioned in the declarations array above
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, //for reactive forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //the component that is to be loaded first // only exists for the main component
})
export class AppModule { }

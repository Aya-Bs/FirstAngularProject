import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  //on va utiliser le service ActivatedRoute pour récupérer les paramètres passés dans l'url
  //DI : Dependency Injection
  //on a injecter ActivatedRoute avec le nom ac sous la classe ProductsCategoryComponent
  //touskié DI dans le constructeur
  //touskié initialisation fel ngOnInit

  constructor(private ac:ActivatedRoute, private ps : ProductsService){}
id: number ;
list : Product[]=[];
listProducts : Product[]=[];


ngOnInit(){
  //this.id=this.ac.snapshot.params['id'];
  //this.ac.params.subscribe(res=>this.id=res['id'])
  //this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));
  

  this.ac.paramMap.subscribe(res=>
    {
      this.id=Number(res.get('id'));//recupere la valeur de l'id
      this.ps.getProductById(this.id).subscribe(res => this.list = res);
      //for(let p of this.listProducts){//parcours de la liste des produits
      //if (p.categoryId == this.id){//compaer l'id du produit avec l'id passé en paramètre
    // this.list.push();//ajout du produit dans la liste puis l'afficher au niveau de la vue html
   });
  }
  


}

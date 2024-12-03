import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({// service decorator
  providedIn: 'root' // définit une seule instance de ce service pour toute l'application

})
export class CategoryService {

  constructor(private _http : HttpClient) {  }

  getListCategories() : Category[]{ // type de retour synchrone 
    return [
      {"id":1,"title":"Grand électroménager", 
      "image":"assets/images/categorie_electromenager.jpg", "description":"desc 1", 
      "available":true},
      {"id":2,"title":"Petit électroménager", 
      "image":"assets/images/categorie_petit_electromenager.jpg", "description":"desc 2", 
      "available":true},
      {"id":3,"title":"Produits informatiques", 
      "image":"assets/images/categorie_produits_informatiques.jpg", "description":"desc 3", 
      "available":true},
      {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", 
      "description":"desc 4", "available":true},
      {"id":5,"title":"TV, images et son", 
      "image":"assets/images/categorie_tv_image_son.jpg", "description":"desc 5", 
      "available":true},
      {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", 
      "description":"desc 6","available":false},
      ];
    
  }
  getListCategoriesFromBackend() : Observable<Category[]>{ // type de retour asynchrone
    return this._http.get<Category[]>("http://localhost:3000/categories");
  }
}

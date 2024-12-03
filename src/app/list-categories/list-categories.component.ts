import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Category } from '../models/category';
import { ShortList } from '../models/shortList';
import { CardComponent } from '../card/card.component';
import { QueryParamsHandling } from '@angular/router';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit , AfterViewInit {
  constructor(private cs : CategoryService){
    //injecter le service
  }
  shortList : ShortList[] = [];
  categories : Category[] =[];
  titre : string = '';
  property : string = 'hello';

  ngOnInit(){
    this.cs.getListCategoriesFromBackend().subscribe((res:Category[]) =>  this.categories = res);
  }
  
 
  clickImage(description: string){
   alert(description);
  }
  f(msg : any){
    console.log("button was clicked " + msg.code + " " + msg.id);
  }
  /*
  addToList(category :Category){
    this.shortList.push({"id": category.id, "idUser":1, "idElement":category.id, "typeElement":"title"});
  }*/
    addToShortList(x:Category){
      let exist : boolean =false;
      let elt : ShortList ={'id':1,'idElement':x.id,'idUser':1,'typeElement':'category'};
      
      for (let a of this.shortList)
      {
        if(a.idUser ==1 && a.idElement== x.id && a.typeElement == 'category')
        {
          exist = true;
          alert('element already exist')
          return;
        }
      }
        if(!exist){
          this.shortList.push(elt);
          console.log(this.shortList);
        }
        
      
    }

  @ViewChildren(CardComponent) cards : QueryList<CardComponent>;
  ngAfterViewInit(){
    this.cards.forEach(card => {
      console.log("child" , card);
      console.log("child title" , card.title);
   
    });
  }

}

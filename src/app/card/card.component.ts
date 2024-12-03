import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() description: string;
  @Input() available: boolean;
  @Input() btnText: string;
  @Input() image: string;
  
  clickImage(description: string){
   alert(description);
  }
  
  @Output() notified = new EventEmitter<any>(); //bech el parent yechlak bel event eli bech yab3athou el fils 
  //le fils yahki maa bouh via des events
  notif(){
    this.notified.emit({'code':202,'id':this.id});
  }
  @Output() added = new EventEmitter();
  add(){
    //let elt : shortList={'id':1,'idElement':x.id,'idUser':1,'typeElement':'category'};
    this.added.emit();
  }
  

}

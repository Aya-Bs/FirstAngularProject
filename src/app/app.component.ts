import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({//component is a decorator that defines a component
  selector: 'app-root', //we use this to call the component in the html file
  templateUrl: './app.component.html', //the component's html file
  styleUrls: ['./app.component.css'] //the component's css file
})
export class AppComponent  //AppComponent is the class of the component 
//AppComponent is the name of the component 

{
  @ViewChild(HeaderComponent) myChild: HeaderComponent;
  ngAfterViewInit(){
    console.log(this.myChild.isAdmin);
  }
  title = 'FirstAngularProject';
}

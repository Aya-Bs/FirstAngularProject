import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { FormBuilder } from'@angular/forms'; 

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})

export class AddProductReactiveComponent {
  myForm:FormGroup;
  loginForm: FormGroup; 
  P:Product=new Product();
  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({ 
      name: ["",[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]*')]], 
      price: ["",[Validators.required,Validators.pattern("^\\d+(\\.\\d+)?$")]], 
      description: ["",Validators.required],
      category_id: ["",Validators.required],
      promotion: ["",[Validators.required,Validators.pattern('^(0|[1-9][0-9]?)$')]],
      });
  }


 
  ngOnInit(){
    this.myForm=new FormGroup({
      name:new FormControl("test",[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]*')]), 
      price:new FormControl("",[Validators.required,Validators.pattern("^\\d+(\\.\\d+)?$")]),
      description:new FormControl("",Validators.required),
      category_id:new FormControl("",Validators.required),
      promotion:new FormControl("",[Validators.required,Validators.pattern('^(0|[1-9][0-9]?)$')]),
    
    })
    
      
  }
  

  get name(){
    return this.myForm.get('name');
  }
  get price(){
    return this.myForm.get('price');
  }
  get description(){
    return this.myForm.get('description');
  }
  get promotion(){
    return this.myForm.get('promotion');
  }
  get category_id(){
    return this.myForm.get('category_id');
  }
  save(){
    console.log(this.myForm.value);

  }
}

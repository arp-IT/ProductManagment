import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './../../../service/message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy  {

  productInfo:any[] = [];
  subscription: Subscription;
  productForm: FormGroup;
  submitted = false;
  productId:number;

  constructor(private messageService: MessageService,private formBuilder: FormBuilder,private productService:ProductService) {}

  ngOnInit(){

    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      rating: ['', [Validators.required,Validators.min(1),Validators.max(10)]]
  });

    this.subscription = this.messageService.getMessage().subscribe(data => {
      if (data) {
        this.productInfo = data.selectedProduct[0];
        this.productId = data.selectedProduct[0].id;
        this.productForm.setValue({name: this.productInfo['name'], price: this.productInfo['price'],rating: this.productInfo['rating']});
      } else {
        this.productInfo = [];
      }
    });
  }

   // convenience getter for easy access to form fields
   get f() { 
     return this.productForm.controls;
     }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  AddProduct()
  {
    this.submitted = true;
    if (this.productForm.invalid) {
        return;
    }

    this.productService.productAdd(this.productForm.value)
      .subscribe(data => {
        this.messageService.setProductUpdate(true);
      },
      error =>{
        console.log(error);
      });
  }

  DeleteProduct(){
    this.submitted = true;
    if (this.productForm.invalid) {
        return;
    }

    this.productService.productDelete(this.productId)
      .subscribe(data => {
        this.messageService.setProductUpdate(true);
      },
      error =>{
        console.log(error);
      });
  }


  UpdateProduct()
  {
    this.submitted = true;
    if (this.productForm.invalid) {
        return;
    }

    this.productService.productUpdate(this.productForm.value,this.productId)
      .subscribe(data => {
        this.messageService.setProductUpdate(true);
      },
      error =>{
        console.log(error);
      });
  }

}

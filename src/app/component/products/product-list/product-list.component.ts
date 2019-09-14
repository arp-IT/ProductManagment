import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Subscription } from 'rxjs';
import { MessageService } from './../../../service/message.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {

  public productList:any = [];
  messages: any[] = [];
  subscription: Subscription;
  selectedRow:Number=0;
  constructor(private productService:ProductService,private messageService: MessageService) { }

  ngOnInit() {
      this.getProductList();
      this.subscription = this.messageService.getProductUpdate().subscribe(status => {
        if(status){
          this.selectedRow = 0;
          this.getProductList();
        }
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getProductList(){
    this.productService.productList()
      .subscribe(data => {
        this.productList = data;
        let prodObj = [];
        prodObj.push(this.productList[0]);
        prodObj.push(this.productList.length);
        this.messageService.sendMessage(prodObj);
      },
      error =>{
        console.log(error);
      });
  }

  setSelecetdProduct(selectedProduct,index)
  {
    let prodObj = [];
    prodObj.push(selectedProduct);
    prodObj.push(this.productList.length);
    this.messageService.sendMessage(prodObj);
    this.selectedRow = index;
  }

}

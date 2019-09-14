import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit,OnDestroy {
   
  subscription: Subscription;
  productLength:number;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(data => {
      if (data) {
        this.productLength = data.selectedProduct[1];
      } else {
        this.productLength = 0;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}

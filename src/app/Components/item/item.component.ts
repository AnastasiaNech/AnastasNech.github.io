import { Component, Input } from '@angular/core';
import { subscription } from '../item-list/item-list.component';
import { Guid } from 'guid-typescript';
import { subscriptionPrice } from '../price-select/price-select.component';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  name!: string;   
  id!: Guid;  
  img!: string;
  subscriptionPrice!: Array<subscriptionPrice>;

  @Input() set subscription(subscription: subscription){
    this.name = subscription.name;
    this.id = subscription.id;
    this.img = 'assets/img/' + subscription.img + '.png';
    this.subscriptionPrice = subscription.price;
  }  
}

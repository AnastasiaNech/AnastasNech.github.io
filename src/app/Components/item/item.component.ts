import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { subscription } from '../item-list/item-list.component';
import { Guid } from 'guid-typescript';
import { subscriptionPrice } from '../price-select/price-select.component';
import { telegr } from 'src/assets/app';

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
  subscriptionItem!: subscription;
  visibility_cost: boolean = false;

  constructor(private el: ElementRef) {}

  @Input() set subscription (subscription: subscription){
    this.name = subscription.name;
    this.id = subscription.id;
    this.img = 'assets/img/' + subscription.img + '.png';
    this.subscriptionPrice = subscription.price;
    this.subscriptionItem = subscription;
  }  

  public showPrice(): void{      
    telegr.WebApp.sendData('test');
      this.visibility_cost = !this.visibility_cost;
  }


	@HostListener('document:click', ['$event'])
	onClick(event: Event) {
		if (!this.el.nativeElement.contains(event.target)) {
      this.visibility_cost = false;
		}
	}
}

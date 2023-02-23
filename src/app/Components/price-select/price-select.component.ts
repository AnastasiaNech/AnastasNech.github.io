import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { subscription } from '../item-list/item-list.component';

@Component({
  selector: 'price-select',
  templateUrl: './price-select.component.html',
  styleUrls: ['./price-select.component.scss']
})
export class PriceSelectComponent {
  
  @Output() CancelEvent = new EventEmitter();
  @Input() subscriptionPrice!: Array<subscriptionPrice>
  @Input() subscription!: subscription;
  @Input() visibility_price: boolean = false
  public visibility_confirm: boolean = false;
  public price_to_confirm! : subscriptionPrice;

  constructor(private el: ElementRef) {}

  public SelectPrice(item:subscriptionPrice): void{
    this.visibility_price = false;
    this.visibility_confirm = true;
    this.price_to_confirm = item;    
}

@HostListener('document:click', ['$event'])
onClick(event: Event) {
  if (!this.el.nativeElement.contains(event.target)) {
    this.visibility_confirm = false;
  }
}

public Cancel(): void {
    this.visibility_confirm = false;
    this.CancelEvent.emit();
}
}

export interface subscriptionPrice{
  id: Guid;
  name: string;
  price: number;
}
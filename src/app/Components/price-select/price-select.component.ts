import { Component, Input } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'price-select',
  templateUrl: './price-select.component.html',
  styleUrls: ['./price-select.component.scss']
})
export class PriceSelectComponent {
  @Input() subscriptionPrice!: Array<subscriptionPrice>
  @Input() visibility_price: boolean = false
}

export interface subscriptionPrice{
  id: Guid;
  name: string;
  price: number;
}
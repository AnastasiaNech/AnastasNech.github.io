import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { subscriptionPrice } from '../price-select/price-select.component';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  public ItemList: Array<subscription> = 
  [
    { id: Guid.create(), name: 'Яндекс плюс', price: this.getTestPrices(), img: 'plus'},
    { id: Guid.create(), name: 'Netflix', price: this.getTestPrices(), img: 'netflix' },
    { id: Guid.create(), name: 'Ivi', price: this.getTestPrices(), img: 'ivi' },
    { id: Guid.create(), name: 'Яндекс плюс', price: this.getTestPrices(), img: 'plus'},
    { id: Guid.create(), name: 'Netflix', price: this.getTestPrices(), img: 'netflix' },
    { id: Guid.create(), name: 'Ivi', price: this.getTestPrices(), img: 'ivi' },
    { id: Guid.create(), name: 'Яндекс плюс', price: this.getTestPrices(), img: 'plus'},
    { id: Guid.create(), name: 'Netflix', price: this.getTestPrices(), img: 'netflix' },
    { id: Guid.create(), name: 'Ivi', price: this.getTestPrices(), img: 'ivi' },
  ]

  private getTestPrices(): Array<subscriptionPrice>
  {
  return [
    {id: Guid.create(), name: 'месяц',price: 100},
    {id: Guid.create(), name: '3 месяца',price: 250},
    {id: Guid.create(), name: '6 месяцев',price: 450},
    {id: Guid.create(), name: 'год',price: 800}
  ]};
}


export interface subscription   {
  id: Guid;
  name: string;
  price: Array<subscriptionPrice>;
  img: string
}


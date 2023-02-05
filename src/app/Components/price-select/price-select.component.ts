import { Component, Input } from '@angular/core';
import { Guid } from 'guid-typescript';
import { tg } from 'src/assets/app';

@Component({
  selector: 'price-select',
  templateUrl: './price-select.component.html',
  styleUrls: ['./price-select.component.scss']
})
export class PriceSelectComponent {
  @Input() subscriptionPrice!: Array<subscriptionPrice>
  @Input() visibility_price: boolean = false

  public SelectPrice(item:subscriptionPrice): void{
      tg.MainButton.setText(`Вы выбрали ${item.name}`);
      if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
      }
      else {     
        tg.MainButton.show();
      }
}
}

export interface subscriptionPrice{
  id: Guid;
  name: string;
  price: number;
}
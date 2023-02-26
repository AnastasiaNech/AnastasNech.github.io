import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tg } from 'src/assets/app';
import { subscription } from '../item-list/item-list.component';
import { subscriptionPrice } from '../price-select/price-select.component';

@Component({
  selector: 'confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.scss']
})
export class ConfirmFormComponent {

  public queryId: string = '';
  public name: string = '';
  public price: string | number = '';

  @Output() CancelEvent = new EventEmitter();
  @Input() element_to_confirm!: subscription;
  @Input() set price_to_confirm(price_to_confirm: subscriptionPrice){    
    var monthCount = price_to_confirm ? price_to_confirm.name:'';
    var price = price_to_confirm ? price_to_confirm.price:'';
    var name = this.element_to_confirm ? this.element_to_confirm.name:'';

    this.name = name;
    this.price = price;

    this.text = `подписка на ${name} на ${monthCount} за ${price} руб.`
  }
  ;


  public text: string = '';

  private sendingData!:{};

  constructor(){    
  }

  public Confirm(): void{

    this.sendingData = {
      name: this.name,
      price: this.price,
      queryId: tg.initData
    };

    fetch('http://localhost:8000/web-data', {
      method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
      body: JSON.stringify(this.sendingData)
  })
    this.CancelEvent.emit();
  }

  public Cancel(): void{
    this.CancelEvent.emit();
  }
}

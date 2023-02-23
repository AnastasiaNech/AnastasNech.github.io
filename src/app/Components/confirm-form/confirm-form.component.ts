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

  @Output() CancelEvent = new EventEmitter();
  @Input() element_to_confirm!: subscription;
  @Input() set price_to_confirm(price_to_confirm: subscriptionPrice){

    var monthCount = price_to_confirm ? price_to_confirm.name:'';
    var price = price_to_confirm ? price_to_confirm.price:'';
    var name = this.element_to_confirm ? this.element_to_confirm.name:'';
    this.text = `подписка на ${name} на ${monthCount} за ${price} руб.`
    this.sendingDate = {
      name,
      price
  }
  };


  public text: string = '';

  private sendingDate!:{};

  constructor(){    
  }

  public Confirm(): void{
    tg.onEvent('mainButtonClicked', tg.sendData(JSON.stringify(this.sendingDate)))

    tg.offEvent('mainButtonClicked', tg.sendData(JSON.stringify(this.sendingDate)))
  }

  public Cancel(): void{
    this.CancelEvent.emit();
  }
}

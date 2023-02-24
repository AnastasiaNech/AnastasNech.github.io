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
    this.sendingData = {
      name,
      price
  }
  };


  public text: string = '';

  private sendingData!:{};

  constructor(){    
  }

  public Confirm(): void{
    if (tg.MainButton.isActive){ //если кнопка показана 
      tg.MainButton.setParams({"color": "#E0FFFF"}); 
      tg.MainButton.disable() //скрываем кнопку 
    }
    else{ //иначе
      tg.MainButton.setParams({"color": "#143F6B"}); 
      tg.MainButton.enable() //показываем 
    }
  }

  public Cancel(): void{
    this.CancelEvent.emit();
  }
}

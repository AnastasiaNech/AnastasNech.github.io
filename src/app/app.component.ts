import { Component } from '@angular/core';
import { Telegraf } from 'telegraf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  public bot: Telegraf = new Telegraf('5836658333:AAGM2lRF_sDjsxliWs263MW9PElVQj3-cBs');

  constructor(){
    this.bot.start((ctx) => {
       ctx.reply('Hello ' + ctx.from.first_name + '!');
     });
    this.bot.launch();
  }

  title = 'myStore';
}

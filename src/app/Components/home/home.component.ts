import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(){
   
  }
  ngOnInit(): void {

    this.initButton();
  }
  public test1: string = "";
  public initButton(): void
  {
      var test = (window as any).Telegram.WebApp;

      test.expand();

      test.MainButton.textColor = "#FFFFFF";
      test.MainButton.color = "#2cab37";

      let usercard = document.getElementById("usercard");
      let p = document.createElement("p");
      p.innerText = 
      test.initDataUnsafe.user.first_name + ' ' + test.initDataUnsafe.user.last_name;
      usercard?.appendChild(p); 
  }  
}

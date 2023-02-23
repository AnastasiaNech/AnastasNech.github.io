import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ItemListComponent } from './Components/item-list/item-list.component';
import { ItemComponent } from './Components/item/item.component';
import { PriceSelectComponent } from './Components/price-select/price-select.component';
import { ConfirmFormComponent } from './Components/confirm-form/confirm-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemListComponent,
    ItemComponent,
    PriceSelectComponent,
    ConfirmFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

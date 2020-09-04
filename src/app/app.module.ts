import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlockCardComponent } from './block-card/block-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatButtonModule ],
  declarations: [ AppComponent, HelloComponent, BlockCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

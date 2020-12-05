import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { PublicComponent } from './public/public.component';
import { MailBoxComponent } from './public/mail-box/mail-box.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/card/card.component';
import { CardViewComponent } from './main/card-view/card-view.component';
import { WriteCardComponent } from './main/write-card/write-card.component';
import { MyInfoComponent } from './main/my-info/my-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicComponent,
    MailBoxComponent,
    MainComponent,
    CardComponent,
    CardViewComponent,
    WriteCardComponent,
    MyInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { SendCardComponent } from './main/send-card/send-card.component';
import { GraphQLModule } from './graphql.module';
import { DataService } from 'src/graphql/data-services';
import { HttpClientModule } from '@angular/common/http';
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
    SendCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

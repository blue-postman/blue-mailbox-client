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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginCallbackComponent } from './public/login-callback/login-callback.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SignUpComponent } from './main/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

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
    SendCardComponent,
    LoginCallbackComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

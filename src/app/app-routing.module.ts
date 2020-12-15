import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardViewComponent } from './main/card-view/card-view.component';
import { CardComponent } from './main/card/card.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { MyInfoComponent } from './main/my-info/my-info.component';
import { RequestComponent } from './main/request/request.component';
import { SendCardViewComponent } from './main/send-card-view/send-card-view.component';
import { SendCardComponent } from './main/send-card/send-card.component';
import { SignUpComponent } from './main/sign-up/sign-up.component';
import { WriteCardComponent } from './main/write-card/write-card.component';
import { LoginCallbackComponent } from './public/login-callback/login-callback.component';
import { MailBoxComponent } from './public/mail-box/mail-box.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '', // 웹에서 보여지는 컴포넌트 (상단, 햄버거바 기본)
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'card', component: CardComponent },
      { path: 'card-view/:card_idx', component: CardViewComponent },
      { path: 'my-info', component: MyInfoComponent },
      { path: 'send-card', component: SendCardComponent }, // 보낸카드 모아보는 컴포넌트
      { path: 'write-card/:card_idx', component: WriteCardComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'send-card-view/:card_idx', component: SendCardViewComponent },
      { path: 'request', component: RequestComponent },
    ]
  },
  {
    path: '', // 웹에서 보여지는 화면이 아닌 컴포넌트들
    component: PublicComponent,
    children: [
      {
        path: 'mail-box/:send_code', // 공유한 카드 보는 컴포넌트라 분리가 필요.
        component: MailBoxComponent
      },      
      {
        path: 'login-callback/:token', // 공유한 카드 보는 컴포넌트라 분리가 필요.
        component: LoginCallbackComponent
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardViewComponent } from './main/card-view/card-view.component';
import { CardComponent } from './main/card/card.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { MyInfoComponent } from './main/my-info/my-info.component';
import { SendCardComponent } from './main/send-card/send-card.component';
import { WriteCardComponent } from './main/write-card/write-card.component';
import { MailBoxComponent } from './public/mail-box/mail-box.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  {
    path: 'public', // 웹에서 보여지는 화면이 아닌 컴포넌트들
    component: PublicComponent,
    children: [
      {
        path: 'mail-box', // 공유한 카드 보는 컴포넌트라 분리가 필요.
        component: MailBoxComponent
      },
    ]
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '', // 웹에서 보여지는 컴포넌트 (상단, 햄버거바 기본)
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'card', component: CardComponent },
      { path: 'card-view', component: CardViewComponent },
      { path: 'my-info', component: MyInfoComponent },
      { path: 'send-card', component: SendCardComponent }, // 보낸카드 모아보는 컴포넌트
      { path: 'write-card', component: WriteCardComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

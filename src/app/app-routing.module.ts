import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './modules/chat/chat.component';
import { GreetingPageComponent } from './modules/greeting-page/greeting-page.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingPageComponent,
  },
  {
    path: 'chat/:id',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

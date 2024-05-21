import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './modules/chat/chat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TabsService } from './services/tabs.service';
import { GreetingPageModule } from './modules/greeting-page/greeting-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    GreetingPageModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [TabsService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

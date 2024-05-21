import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { InformationPanelModule } from './components/information-panel/information-panel.module';
import { MessagingFlowModule } from './components/messaging-flow/messaging-flow.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, InformationPanelModule, MessagingFlowModule],
  exports: [ChatComponent],
})
export class ChatModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingFlowComponent } from './messaging-flow.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageFormModule } from '../message-form/message-form.module';

@NgModule({
  declarations: [MessagingFlowComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MessageFormModule,
  ],
  exports: [MessagingFlowComponent],
})
export class MessagingFlowModule {}

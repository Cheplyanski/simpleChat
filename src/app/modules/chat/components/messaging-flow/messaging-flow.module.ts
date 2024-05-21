import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingFlowComponent } from './messaging-flow.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MessagingFlowComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [MessagingFlowComponent],
})
export class MessagingFlowModule {}

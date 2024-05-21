import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageFormComponent } from './message-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MessageFormComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  exports: [MessageFormComponent],
})
export class MessageFormModule {}

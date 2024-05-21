import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingPageComponent } from './greeting-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GreetingPageComponent],
  imports: [CommonModule, MatButtonModule],
})
export class GreetingPageModule {}

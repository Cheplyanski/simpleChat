import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationPanelComponent } from './information-panel.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [InformationPanelComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [InformationPanelComponent],
})
export class InformationPanelModule {}

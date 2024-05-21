import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingPageComponent {
  private tabsService = inject(TabsService);
  private router = inject(Router);
  createChatTab(): void {
    const newTab = this.tabsService.createTab();

    this.router.navigate([`chat/${newTab.id}`]);
  }
}

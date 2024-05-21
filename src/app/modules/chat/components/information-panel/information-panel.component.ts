import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';
import { WINDOW } from 'src/app/helpers/window.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationPanelComponent {
  @Input()
  public tabName: string | undefined = 'Default';

  private window = inject(WINDOW);
  private tabsService = inject(TabsService);
  private route = inject(ActivatedRoute);
  constructor() {}

  public createTab(): void {
    const currentHost = window.location.host;
    let newChatWindow = this.tabsService.createTab();

    let url = `http://${currentHost}/chat/${newChatWindow.id}`;
    this.window.open(url);
  }
}

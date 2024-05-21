import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  private tabsService = inject(TabsService);
  private route = inject(ActivatedRoute);

  public params$!: Observable<Params>;
  public tabName: string | undefined;
  ngOnInit(): void {
    this.initRouteParams();
  }

  private initRouteParams(): void {
    this.params$ = this.route.params.pipe(
      tap((params) => {
        const id = params['id'];
        this.tabName = this.tabsService.getNameById(id);
      })
    );
  }
}

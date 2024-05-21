import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import {
  BROADCAST_CHANNEL_SIMPLE,
  BroadcastMessage,
} from 'src/app/services/broadcast.service';
import { TabsService } from 'src/app/services/tabs.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-messaging-flow',
  templateUrl: './messaging-flow.component.html',
  styleUrls: ['./messaging-flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagingFlowComponent implements OnInit {
  public tabName: string | undefined;

  public messageContent: FormControl = new FormControl<string>('');

  public messages$!: any;
  public messages: BroadcastMessage[] = [];
  public messageAlert$!: Observable<BroadcastMessage>;
  public params$!: Observable<Params>;

  private tabsService = inject(TabsService);
  private route = inject(ActivatedRoute);
  readonly broadCastService = inject(BROADCAST_CHANNEL_SIMPLE);

  constructor() {
    this.initRouteParams();
  }

  public ngOnInit(): void {
    this.initMessages();
  }

  private initRouteParams(): void {
    this.params$ = this.route.params.pipe(
      tap((params) => {
        const id = params['id'];
        this.tabName = this.tabsService.getNameById(id);
      })
    );
  }

  private initMessages(): void {
    this.messageAlert$ = this.broadCastService.messagesOfType('alert');
    this.messages$ = this.broadCastService.messagesOfType('message').pipe(
      tap((message) => {
        this.messages.push(message);
      })
    );
  }

  public isTyping(isTyping: boolean): void {
    const data = { type: 'alert', name: this.tabName, payload: isTyping };
    this.broadCastService.publish(data);
  }
  public publishMessage(): void {
    let value = this.messageContent.value;
    const data = { type: 'message', name: this.tabName, payload: value };
    this.broadCastService.publish(data);
    this.messages.push(data);
    this.messageContent.reset();
  }

  public trackByFn(index: number | string, item: any): number | string {
    return item.id;
  }
}

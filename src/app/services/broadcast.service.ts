import { inject, InjectionToken, NgZone } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { runInZone } from '../helpers/runInZone';

export interface BroadcastMessage {
  type: string;
  name?: string;
  payload: any;
}
export const BROADCAST_CHANNEL_SIMPLE = new InjectionToken('', {
  providedIn: 'root',
  factory() {
    const zone = inject(NgZone);
    return new BroadcastService('broadcast-channel', zone);
  },
});

export class BroadcastService {
  private broadcastChannel: BroadcastChannel;
  private onMessage = new Subject<BroadcastMessage>();
  constructor(
    broadcastChannelName: string,
    private ngZone: NgZone
  ) {
    this.broadcastChannel = new BroadcastChannel(broadcastChannelName);
    this.broadcastChannel.onmessage = (message) => {
      this.onMessage.next(message.data);
    };
  }

  publish(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }

  messagesOfType(type: string): Observable<BroadcastMessage> {
    return this.onMessage.pipe(
      runInZone(this.ngZone),
      filter((message) => message?.type === type)
    );
  }
}

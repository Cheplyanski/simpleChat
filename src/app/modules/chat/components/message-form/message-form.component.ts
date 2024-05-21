import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BROADCAST_CHANNEL_SIMPLE } from 'src/app/services/broadcast.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent {
  pid: FormControl = new FormControl<string>('');
  readonly broadCastService = inject(BROADCAST_CHANNEL_SIMPLE);
  publishMessage() {
    this.broadCastService.publish({
      type: 'counter',
      name: 'Вкладка 1',
      payload: this.pid.value,
    });
    this.pid.reset();
  }
}

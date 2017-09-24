import { EventService } from './shared/event.service';
import { IEvent } from './shared/event';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable()
export class EventListResolver implements Resolve<Array<IEvent>> {
  constructor(private eventService: EventService) { }

  resolve(): Array<IEvent> {
    return (<any>this.eventService.getEvents())
      .map((events: Array<IEvent>) => events);
  }
}

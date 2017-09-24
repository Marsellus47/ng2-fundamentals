import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventListResolver implements Resolve<Array<IEvent>> {
  constructor(private eventService: EventService) { }

  resolve(): Observable<Array<IEvent>> {
    return this.eventService.getEvents()
      .map(events => events);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: 'app/events/event-details/event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor: pointer; }
  `]
})
export class EventDetailsComponent implements OnInit {
  private event: IEvent;
  private addMode: boolean;

  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    const newSession = Object.assign({}, session, { id: nextId + 1 });
    this.event.sessions.push(newSession);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}

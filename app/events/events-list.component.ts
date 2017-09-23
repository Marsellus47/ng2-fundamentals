import { Component, OnInit } from '@angular/core';

import { IEvent } from './shared/event';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail
          (click)="handleThumbnailClick(event.name)"
          [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: Array<IEvent>;

  constructor(private eventService: EventService,
    private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}

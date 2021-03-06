import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './shared/event.service';

@Component({
  moduleId: module.id,
  templateUrl: 'create-event.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  public isDirty = true;
  public name: string;
  public date: Date;
  public time: string;
  public price: number;
  public address: string;
  public city: string;
  public country: string;
  public onlineUrl: string;
  public imageUrl: string;

  constructor(private router: Router,
    private eventService: EventService) { }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues).subscribe(event => {
      this.router.navigate(['/events']);
      this.isDirty = false;
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}

import { CanDeactivate } from '@angular/router';
import { Inject } from '@angular/core';

import { CreateEventComponent } from './create-event.component';

@Inject({})
export class CreateEventGuardService implements CanDeactivate<CreateEventComponent> {
  canDeactivate(component: CreateEventComponent): boolean {
    if (component.isDirty) {
      return confirm('You have not save this event, do you really want to cancel?');
    }
    return true;
  }
}

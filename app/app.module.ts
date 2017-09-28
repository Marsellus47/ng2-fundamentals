import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventListResolver,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {
  TOASTR_TOKEN,
  JQUERY_TOKEN,
  CollapsibleWellComponent,
  Toastr,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    PageNotFoundComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    AuthService
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return confirm('You have not save this event, do you really want to cancel?');
  }
  return true;
}

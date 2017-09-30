import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventListResolver,
  EventService,
  EventDetailsComponent,
  EventResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  CreateEventGuardService
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
import { ProfileComponent } from './user/profile.component';
import { LoginComponent } from './user/login.component';

let toastr: Toastr = window['toastr'];
let jQuery: Object = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    ProfileComponent,
    LoginComponent
  ],
  providers: [
    EventService,
    EventResolver,
    EventListResolver,
    CreateEventGuardService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    AuthService,
    VoterService
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }

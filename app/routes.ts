import { Routes } from '@angular/router';

import {
  EventDetailsComponent,
  EventsListComponent,
  EventListResolver,
  CreateEventComponent,
  CreateSessionComponent,
  EventResolver
} from './events/index';
import { PageNotFoundComponent } from './errors/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolver }
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '**', component: PageNotFoundComponent }
];

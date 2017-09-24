import { Routes } from '@angular/router';

import {
  EventDetailsComponent,
  EventRouteActivator,
  EventsListComponent,
  EventListResolver,
  CreateEventComponent
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
    canActivate: [EventRouteActivator]
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '**', component: PageNotFoundComponent }
];

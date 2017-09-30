import { Routes } from '@angular/router';

import {
  EventDetailsComponent,
  EventsListComponent,
  EventListResolver,
  CreateEventComponent,
  CreateSessionComponent,
  EventResolver,
  CreateEventGuardService
} from './events/index';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { userRoutes } from './user/user.routes';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [CreateEventGuardService]
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
  {
    path: 'user',
    // loadChildren: 'app/user/user.module#UserModule'
    children: userRoutes
  },
  { path: '**', component: PageNotFoundComponent }
];

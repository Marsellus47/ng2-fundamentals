import { Component } from '@angular/core';

import { EventService } from './../events/shared/event.service';
import { ISession } from './../events/shared/event.model';
import { AuthService } from './../user/auth.service';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: Array<ISession>;

  constructor(public authService: AuthService,
    private eventService: EventService) { }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: Array<ISession>) => {
        this.foundSessions = sessions;
      }
    );
  }
}

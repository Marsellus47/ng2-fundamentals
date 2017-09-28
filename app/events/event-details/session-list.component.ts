import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from './../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Array<ISession>;
  @Input() filterBy: string;
  @Input() sortBy: string;
  private visibleSessions: Array<ISession> = [];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions();
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(): void {
    if (this.filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions
        .filter(x => x.level.toLocaleLowerCase() === this.filterBy.toLocaleLowerCase());
    }
  }
}

function sortByNameAsc (left: ISession, right: ISession) {
  if (left.name > right.name) {
    return 1;
  } else if (left.name === right.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc (left: ISession, right: ISession) {
  return right.voters.length - left.voters.length;
}

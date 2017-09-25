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
      console.log('filtering');
      this.filterSessions();
      console.log('filtered');
      console.log('sorting');
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
      console.log('sorted');
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
  console.log('sorting by name ASC');
  if (left.name > right.name) {
    return 1;
  } else if (left.name === right.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc (left: ISession, right: ISession) {
  console.log('sorting by votes DESC');
  return right.voters.length - left.voters.length;
}

import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/event.model';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Array<ISession>;
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: Array<ISession> = [];

  constructor(private authService: AuthService,
    private voterService: VoterService) { }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions();
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
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

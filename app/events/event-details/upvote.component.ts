import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="well voting-widget">
        <div class="voting-button">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse voting-count">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [
    '/app/events/event-details/upvote.component.css'
  ]
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  };
  @Output() vote = new EventEmitter();
  private iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}

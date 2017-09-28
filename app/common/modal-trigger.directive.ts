import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

import { JQUERY_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(@Inject(JQUERY_TOKEN) private $: any,
    ref: ElementRef) {
      this.element = ref.nativeElement;
    }

  ngOnInit(): void {
    this.element.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}

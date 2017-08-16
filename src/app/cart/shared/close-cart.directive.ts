import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({selector: '[hidePopUpCart]'})
export class CloseCartDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('click', ['$event'])
  public change($event) {
    console.log(this.el);

    let target: Element = this.el.nativeElement;
    target.classList.toggle('hide');
    target.previousElementSibling.classList.toggle('hide');
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({selector: '[toggleClass]'})
export class ToggleClassDirective implements Input {
  @Input() public id: string;
  constructor(private el: ElementRef) {
  }

  @HostListener('click', ['$event'])
  public change($event) {
    let a: Element = document.getElementById(this.id);
    a.classList.toggle('hide');
    a.nextElementSibling.classList.toggle('hide');

  }
}

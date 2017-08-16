import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({selector: '[toggleClass]'})
export class ToggleClassDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('click', ['$event'])
  public change($event) {
    console.log(this.el);
    let a: Element = document.getElementById('popup');
    a.classList.toggle('hide');
    a.nextElementSibling.classList.toggle('hide');

  }
}

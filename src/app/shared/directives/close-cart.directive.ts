import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[hidePopUpCart]' })
export class CloseCartDirective {
  constructor(el: ElementRef) {
  }
  @HostListener('documetn:click', ['$event'])
  public change($event) {

    let target = $event.target.id;

/*    // цикл двигается вверх от target к родителям до table
    while (target !== table) {
      if (target.tagName == 'TD') {
        // нашли элемент, который нас интересует!
        highlight(target);
        return;
      }
      target = target.parentNode;
    }*/
/*    let cartPopUp: Element = document.getElementsByClassName('pop-up')[0];
    cartPopUp.classList.toggle('hide');*/
    console.log($event);
    console.log('$event.currentTarget.classList == \'pop-up\'', target, $event.target);
  }
}

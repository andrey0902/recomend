/**
 * Created by andrei on 15.10.2017.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { CartIconComponent } from './cart-icon.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartStatCountService } from '../../shared/services/cart-stat-count.service';
import { CartService } from '../../shared/services/cart.service';
import { ToggleClassDirective } from '../shared/toggle-class.directive';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';
import { ApiStorageService } from '../../shared/services/api-storage.service';
import { StorageService } from '../../shared/services/storage.service';

describe('the show uniquete count in cart', () => {
  let comp: CartIconComponent;
  let fixture: ComponentFixture<CartIconComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let cartService: CartService;
  let cartStatCountService: CartStatCountService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartIconComponent,
        ToggleClassDirective,
        CartPopupComponent,
      ], // declare the test component
      providers: [CartService,
        CartStatCountService,
        ApiStorageService,
        StorageService,
      ]
    });
    cartService = TestBed.get(CartService);
    cartStatCountService = TestBed.get(CartStatCountService);
    fixture = TestBed.createComponent(CartIconComponent);
    comp = fixture.componentInstance; // CartIconComponent test instance
    spyOn(comp, 'getProduct').and.returnValue(3);
    // query for the title <i> by CSS element selector class count
  });
  it('should display origin title', () => {
    comp.uniqueCount = 3;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.count'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.innerText).toEqual('' + comp.uniqueCount);
  });
  it('should change uniqueCount from 3 to 4', async(
    () => {
      comp.uniqueCount = 3;
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.count'));
      el = de.nativeElement;
      fixture.detectChanges();
      expect(el.innerText).toEqual('3');
      cartStatCountService.state = 5;
      comp.uniqueCount = 4;
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.count'));
      el = de.nativeElement;
      fixture.detectChanges();
      expect(el.innerText).toEqual('4');
    }
  ));
  it('should uniqueCount is null ', () => {
    de = fixture.debugElement.query(By.css('.count'));
    expect(de).toBeNull();
  });
  it('should count is equal 3', () => {
    comp.uniqueCount = 3;
    fixture.detectChanges();
    expect(comp.uniqueCount).toEqual(3);
  });
  it('should count Equal 3', () => {
    comp.uniqueCount = 3;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.count'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.innerText).toEqual('3');
  });
});

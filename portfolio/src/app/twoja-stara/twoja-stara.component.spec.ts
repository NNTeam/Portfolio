/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwojaStaraComponent } from './twoja-stara.component';

describe('TwojaStaraComponent', () => {
  let component: TwojaStaraComponent;
  let fixture: ComponentFixture<TwojaStaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwojaStaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwojaStaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

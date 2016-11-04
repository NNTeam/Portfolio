/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebdevComponent } from './webdev.component';

describe('WebdevComponent', () => {
  let component: WebdevComponent;
  let fixture: ComponentFixture<WebdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

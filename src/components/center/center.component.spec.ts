import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterComponent } from './center.component';

describe('CenterComponent', () => {
  let component: CenterComponent;
  let fixture: ComponentFixture<CenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerComponent } from './spacer.component';

describe('SpacerComponent', () => {
  let component: SpacerComponent;
  let fixture: ComponentFixture<SpacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

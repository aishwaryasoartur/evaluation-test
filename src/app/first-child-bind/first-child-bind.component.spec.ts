import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildBindComponent } from './first-child-bind.component';

describe('FirstChildBindComponent', () => {
  let component: FirstChildBindComponent;
  let fixture: ComponentFixture<FirstChildBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstChildBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChildBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

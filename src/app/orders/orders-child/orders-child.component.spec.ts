import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersChildComponent } from './orders-child.component';

describe('OrdersChildComponent', () => {
  let component: OrdersChildComponent;
  let fixture: ComponentFixture<OrdersChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

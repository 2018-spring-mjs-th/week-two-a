import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbruinsmaPizzaToppingsComponent } from './rbruinsma-pizza-toppings.component';

describe('RbruinsmaPizzaToppingsComponent', () => {
  let component: RbruinsmaPizzaToppingsComponent;
  let fixture: ComponentFixture<RbruinsmaPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbruinsmaPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbruinsmaPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

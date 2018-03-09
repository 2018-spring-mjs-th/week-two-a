import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebertPizzaToppingsComponent } from './debert-pizza-toppings.component';

describe('DebertPizzaToppingsComponent', () => {
  let component: DebertPizzaToppingsComponent;
  let fixture: ComponentFixture<DebertPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebertPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebertPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

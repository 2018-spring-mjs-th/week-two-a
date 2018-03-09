import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QliuPizzaToppingsComponent } from './qliu-pizza-toppings.component';

describe('QliuPizzaToppingsComponent', () => {
  let component: QliuPizzaToppingsComponent;
  let fixture: ComponentFixture<QliuPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QliuPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QliuPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EShaPizzaToppingsComponent } from './e-sha-pizza-toppings.component';

describe('EShaPizzaToppingsComponent', () => {
  let component: EShaPizzaToppingsComponent;
  let fixture: ComponentFixture<EShaPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EShaPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EShaPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

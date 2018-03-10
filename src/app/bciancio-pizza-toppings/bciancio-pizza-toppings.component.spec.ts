import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BciancioPizzaToppingsComponent } from './bciancio-pizza-toppings.component';

describe('BciancioPizzaToppingsComponent', () => {
  let component: BciancioPizzaToppingsComponent;
  let fixture: ComponentFixture<BciancioPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BciancioPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BciancioPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

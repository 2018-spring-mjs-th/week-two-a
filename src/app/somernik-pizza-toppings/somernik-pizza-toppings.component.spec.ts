import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomernikPizzaToppingsComponent } from './somernik-pizza-toppings.component';

describe('SomernikPizzaToppingsComponent', () => {
  let component: SomernikPizzaToppingsComponent;
  let fixture: ComponentFixture<SomernikPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomernikPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomernikPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

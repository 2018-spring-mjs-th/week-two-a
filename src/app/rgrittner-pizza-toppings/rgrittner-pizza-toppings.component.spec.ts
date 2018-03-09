import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgrittnerPizzaToppingsComponent } from './rgrittner-pizza-toppings.component';

describe('RgrittnerPizzaToppingsComponent', () => {
  let component: RgrittnerPizzaToppingsComponent;
  let fixture: ComponentFixture<RgrittnerPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgrittnerPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgrittnerPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

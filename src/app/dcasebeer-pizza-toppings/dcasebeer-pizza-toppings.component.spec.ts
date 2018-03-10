import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcasebeerPizzaToppingsComponent } from './dcasebeer-pizza-toppings.component';

describe('DcasebeerPizzaToppingsComponent', () => {
  let component: DcasebeerPizzaToppingsComponent;
  let fixture: ComponentFixture<DcasebeerPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcasebeerPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcasebeerPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

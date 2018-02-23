import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcaughlinPizzaToppingsComponent } from './jcaughlin-pizza-toppings.component';

describe('JcaughlinPizzaToppingsComponent', () => {
  let component: JcaughlinPizzaToppingsComponent;
  let fixture: ComponentFixture<JcaughlinPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcaughlinPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcaughlinPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

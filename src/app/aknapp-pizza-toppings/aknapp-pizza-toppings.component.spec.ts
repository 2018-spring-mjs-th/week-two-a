import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AknappPizzaToppingsComponent } from './aknapp-pizza-toppings.component';

describe('AknappPizzaToppingsComponent', () => {
  let component: AknappPizzaToppingsComponent;
  let fixture: ComponentFixture<AknappPizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AknappPizzaToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AknappPizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

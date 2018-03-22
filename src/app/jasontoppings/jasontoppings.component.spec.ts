import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasontoppingsComponent } from './jasontoppings.component';

describe('JasontoppingsComponent', () => {
  let component: JasontoppingsComponent;
  let fixture: ComponentFixture<JasontoppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasontoppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasontoppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

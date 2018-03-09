import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkulasPizzaToppingComponent } from './skulas-pizza-topping.component';

describe('SkulasPizzaToppingComponent', () => {
  let component: SkulasPizzaToppingComponent;
  let fixture: ComponentFixture<SkulasPizzaToppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkulasPizzaToppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkulasPizzaToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

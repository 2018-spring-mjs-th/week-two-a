import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpizzaComponent } from './jpizza.component';

describe('JpizzaComponent', () => {
  let component: JpizzaComponent;
  let fixture: ComponentFixture<JpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

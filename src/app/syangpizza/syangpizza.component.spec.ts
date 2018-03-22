import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyangpizzaComponent } from './syangpizza.component';

describe('SyangpizzaComponent', () => {
  let component: SyangpizzaComponent;
  let fixture: ComponentFixture<SyangpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyangpizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyangpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

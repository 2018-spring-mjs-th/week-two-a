import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEjutenComponent } from './component-ejuten.component';

describe('ComponentEjutenComponent', () => {
  let component: ComponentEjutenComponent;
  let fixture: ComponentFixture<ComponentEjutenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentEjutenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEjutenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

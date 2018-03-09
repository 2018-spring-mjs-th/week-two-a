import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JStoffComponentComponent } from './j-stoff-component.component';

describe('JStoffComponentComponent', () => {
  let component: JStoffComponentComponent;
  let fixture: ComponentFixture<JStoffComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JStoffComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JStoffComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

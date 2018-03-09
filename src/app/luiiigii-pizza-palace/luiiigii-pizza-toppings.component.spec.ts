import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LuiiigiisPizzaPalaceComponent } from './luiiigii-pizza-toppings.component';
describe('LuiiigiisPizzaPalaceComponent', () => {
  let component: LuiiigiisPizzaPalaceComponent;
  let fixture: ComponentFixture<LuiiigiisPizzaPalaceComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuiiigiisPizzaPalaceComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LuiiigiisPizzaPalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
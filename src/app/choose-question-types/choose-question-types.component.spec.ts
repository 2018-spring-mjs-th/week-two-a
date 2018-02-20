import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuestionTypesComponent } from './choose-question-types.component';

describe('ChooseQuestionTypesComponent', () => {
  let component: ChooseQuestionTypesComponent;
  let fixture: ComponentFixture<ChooseQuestionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseQuestionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseQuestionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

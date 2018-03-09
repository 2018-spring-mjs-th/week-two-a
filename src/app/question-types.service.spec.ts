import { TestBed, inject } from '@angular/core/testing';

import { QuestionTypesService } from './question-types.service';

describe('QuestionTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionTypesService]
    });
  });

  it('should be created', inject([QuestionTypesService], (service: QuestionTypesService) => {
    expect(service).toBeTruthy();
  }));
});

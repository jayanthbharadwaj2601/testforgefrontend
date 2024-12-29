import { TestBed } from '@angular/core/testing';

import { QuestiontopicService } from './questiontopic.service';

describe('QuestiontopicService', () => {
  let service: QuestiontopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestiontopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

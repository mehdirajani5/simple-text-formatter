import { TestBed } from '@angular/core/testing';

import { SimpleFormatterService } from './simple-formatter.service';

describe('SimpleFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleFormatterService = TestBed.get(SimpleFormatterService);
    expect(service).toBeTruthy();
  });
});

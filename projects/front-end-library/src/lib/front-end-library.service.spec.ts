import { TestBed } from '@angular/core/testing';

import { FrontEndLibraryService } from './front-end-library.service';

describe('FrontEndLibraryService', () => {
  let service: FrontEndLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontEndLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DadserieService } from './dadserie.service';

describe('DadserieService', () => {
  let service: DadserieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadserieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

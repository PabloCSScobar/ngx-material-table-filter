import { TestBed } from '@angular/core/testing';

import { NgxMaterialTableFilterService } from './ngx-material-table-filter.service';

describe('NgxMaterialTableFilterService', () => {
  let service: NgxMaterialTableFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialTableFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

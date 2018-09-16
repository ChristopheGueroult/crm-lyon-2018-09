import { TestBed, inject } from '@angular/core/testing';

import { PrestationResolverService } from './prestation-resolver.service';

describe('PrestationResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrestationResolverService]
    });
  });

  it('should be created', inject([PrestationResolverService], (service: PrestationResolverService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PlotConsumerService } from './plot-consumer.service';

describe('PlotConsumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotConsumerService = TestBed.get(PlotConsumerService);
    expect(service).toBeTruthy();
  });
});

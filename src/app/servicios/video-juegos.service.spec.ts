import { TestBed } from '@angular/core/testing';

import { VideoJuegosService } from './video-juegos.service';

describe('VideoJuegosService', () => {
  let service: VideoJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GlobalServiceService } from './global-service.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('GlobalServiceService', () => {
  let service: GlobalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, BrowserAnimationsModule, NoopAnimationsModule],
      providers: [GlobalServiceService]
    });
    service = TestBed.inject(GlobalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Listar Cards', () => {
    expect(service.listarTodosCards()).toBeTruthy();
  });

  it('Buscar por nome', () => {
    const nome = 'Reshiram & Charizard-GX';
    expect(service.buscarPorNome(nome)).toBeTruthy();
  });


  it('Buscar por id', () => {
    const id = 'sm10-217';
    expect(service.buscarPorId(id)).toBeTruthy();
  });
});

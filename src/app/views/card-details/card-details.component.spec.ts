import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsComponent } from './card-details.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { GlobalServiceService } from 'src/app/core/services/global-service.service';


describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([ { path: '', component: HomeComponent}]),
      ],
      declarations: [ CardDetailsComponent, HomeComponent ],
      providers: [GlobalServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    component.card = 'sm10-217';
    fixture.detectChanges();
  });

  it('Deve testar o component', () => {
    expect(component).toBeTruthy();
  });

  it('ddve Voltar', () => {
    expect(component.voltar()).toBe(undefined);
  });

  it('Deve mostrar modal ataque', () => {
    const ataque = { nome: 'teste', id: 'sm10-217'}
    let content;
    expect(component.open(content, ataque)).toBe(undefined);
  });

  it('Deve buscar por ID', () => {
    expect(component.buscarPorId()).toBe(undefined);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GlobalServiceService } from 'src/app/core/services/global-service.service';
import { CardDetailsComponent } from '../card-details/card-details.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([ { path: 'card-details', component: CardDetailsComponent}]),
      ],
      declarations: [ HomeComponent, CardDetailsComponent ],
      providers: [
        GlobalServiceService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve pesquisar', () => {
    expect(component.pesquisar()).toBe(undefined);
  });

  it('deve pesquisar', () => {
    const card = { nome: 'teste'};
    expect(component.detalhar(card)).toBe(undefined);
  });

  it('deve buscar por nome', () => {
    expect(component.buscarPorNome()).toBe(undefined);
  });
  it('deve listar todos cards', () => {
    expect(component.listarTodosCards()).toBe();
  });
});

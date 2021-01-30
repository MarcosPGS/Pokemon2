import { Component, OnInit , ViewChild} from '@angular/core';
import { GlobalServiceService } from '../../core/services/global-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  cards: any = null;
  card: any = null;
  errors: any[] = [];
  nomePokemon: string;
  modelChanged = new Subject<string>();
  habilitarBotaoPesquisar = false;
  mostarCard = true;
  constructor(private globalService: GlobalServiceService,
              private spinner: NgxSpinnerService, private router: Router,
              private toastr: ToastrService) {
    this.modelChanged.pipe(debounceTime(300)).subscribe(() => {
      if (this.nomePokemon.length >= 3) {
        this.habilitarBotaoPesquisar = true;
      }
      if (this.nomePokemon.length < 3) {
        this.habilitarBotaoPesquisar = false;
      }
    });
   }

  ngOnInit(): void {
    this.spinner.show();

    this.listarTodosCards();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
  buscarPorNome(): void{
    this.globalService.buscarPorNome(this.nomePokemon).subscribe((resp) => {
      if (resp.cards.length > 0) {
        this.cards = resp.cards;
        this.mostarCard = true;
        this.errors = [];
      }
      if (resp.cards.length <= 0) {
        this.mostarCard = false;
      }
      this.nomePokemon = null;
      this.habilitarBotaoPesquisar = false;
    }, error => this.processarFalha(error));
  }

  detalhar(c: any): void{
    this.card = c;
    this.router.navigate(['/card-details'], {
      queryParams: { card: JSON.stringify(c) },
      skipLocationChange: true
    });
  }

  listarTodosCards(): void {
    this.globalService.listarTodosCards().subscribe(resp =>
      {
      this.cards = resp.cards;
      this.cards.sort((a, b) => (a.name < b.name) ? -1 : 1);
      this.errors = [];

    }, error => {this.toastr.error('Ocorreu um erro!', error.message); });
  }

  pesquisar(): void {
    this.modelChanged.next();
  }

  processarFalha(fail: any): void{
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', fail.error.message);
  }

}

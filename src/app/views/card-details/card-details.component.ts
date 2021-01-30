import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceService } from 'src/app/core/services/global-service.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.sass']
})
export class CardDetailsComponent implements OnInit {
  card: any = null;
  cardBuscado: any = null;
  ataques: any[] = [];
  ataque;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private globalService: GlobalServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.card) {
        this.card = JSON.parse(resp.card);
      }
    });
    this.buscarPorId();
  }

  buscarPorId(): void{
    this.globalService.buscarPorId( this.card.id).subscribe((resp) => {
      this.cardBuscado = resp;
      this.ataques = resp.card.attacks;
    }, error => {
      alert(error);
    });
  }
  open(content, ataque: any) {
    this.ataque = ataque;
    this.modalService.open(content);
  }


  voltar(): void {
    this.router.navigate(['/']);
  }

}

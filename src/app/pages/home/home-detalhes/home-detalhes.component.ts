import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-detalhes',
  templateUrl: './home-detalhes.component.html',
  styleUrls: ['./home-detalhes.component.scss']
})
export class HomeDetalhesComponent implements OnInit {

  carDetail: any = null;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(take(1))
      .subscribe(
        (rotaParams) => {
          if (rotaParams.id) {
            this.getDetails(rotaParams.id);
          }
        }
      );
  }

  getDetails(id: number) {

    this.homeService.getDetailVehicle(id).pipe(take(1)).subscribe(
      (response: any) => {
        
        this.carDetail = response;

      },
      (erro: any) => {
        console.error(erro);
        this.carDetail = false;
      }
    );

  }

  goBackPage() {
    window.history.back();
  }

}

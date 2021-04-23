import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { take } from 'rxjs/operators';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loadingApi: any = null;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['placa', 'modelo', 'fabricante', 'status', 'acao'];

  inputSearch: string;
  buscaFiltrada = false;
  paginasDisponiveis: number[] = [1, 2, 3, 4, 5];
  page: number = 1;
  quantity: number = 5;

  constructor(
    private HomeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles() {
    
    this.loadingApi = null;
    
    this.HomeService.getAllVehiclesPaginate(this.page, this.quantity).pipe(take(1)).subscribe(
      (response: any) => {
        this.dataSource.data = response;
        this.loadingApi = true;
      },
      (error: any) => {
        console.error(error);
        this.loadingApi = false;
      }
    );
  }

  filterSearch() {

    if(this.inputSearch?.length) {

      this.buscaFiltrada = true;
      this.loadingApi = null;

      this.HomeService.getVehiclesFilter(this.inputSearch).pipe(take(1)).subscribe(
        (response: any) => {
          this.dataSource.data = response;
          this.loadingApi = true;
        },
        (error: any) => {
          console.error(error);
          this.loadingApi = false;
        }
      );
    } else {
      this.clearFilterSearch();
    }
  }

  clearFilterSearch() {
    this.inputSearch = '';
    this.buscaFiltrada = false;
    this.getAllVehicles();
  }

  changePage(pagina: number) {
    this.page = pagina;
    this.getAllVehicles();
  }
  

}

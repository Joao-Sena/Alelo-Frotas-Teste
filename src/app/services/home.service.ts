import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllVehicles() {
    const url = 'https://5eb9ba733f97140016992030.mockapi.io/vehicle';

    return this.http.get(url);
  }

  getAllVehiclesPaginate(page: any, quantity: any) {
    const url=`https://5eb9ba733f97140016992030.mockapi.io/vehicle?page=${page}&limit=${quantity}`;

    return this.http.get(url);
  }

  getVehiclesFilter(placa: string) {
    const url = `https://5eb9ba733f97140016992030.mockapi.io/vehicle?filter=${placa}`;

    return this.http.get(url);
  }

  getDetailVehicle(id: number) {
    const url = `https://5eb9ba733f97140016992030.mockapi.io/vehicle/${id}`;

    return this.http.get(url);
  }

}

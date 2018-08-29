import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flower } from './flower';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  
  private flowersUrl = 'http://localhost:8080/api/flowers';

  constructor(
    private http: HttpClient
  ) { }
  
  getFlowers(): Observable<Flower[]>{
    return this.http.get<Flower[]>(this.flowersUrl);
  }
  
  getFlower(id: number): Observable<Flower>{
    const url = `${this.flowersUrl}/${id}`;
    return this.http.get<Flower>(url);
  }
  
  addFlower(flower: Flower): Observable<Flower>{
    return this.http.post<Flower>(this.flowersUrl, flower, httpOptions);
  }
  
  deleteFlower(flower: Flower | number): Observable<Flower>{
    const id = typeof flower === 'number' ? flower : flower.id;
    const url = `${this.flowersUrl}/${id}`;
    return this.http.delete<Flower>(url, httpOptions);
  }
  
  updateFlower(flower: Flower): Observable<any>{
    return this.http.put(this.flowersUrl, flower, httpOptions);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RistorantiService {

  constructor(private http: HttpClient) { }

  getRistoranti(skip: number, take: number) {
    return this.http.get(`http://localhost:5000/api/restaurant/getRestaurants/${skip}/${take}`)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { saturn } from './saturn';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // https://www.saturn.de/de/data/fundgrube/api/postings?limit=100000&offset=0
  private itemsUrl = '/api/postings?limit=100000&offset=0';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getSaturnData(): Observable<saturn.RootObject> {
  //   const items = of(ITEMS);
  //   return items;
  return this.http.get<saturn.RootObject>(this.itemsUrl)
  }
}

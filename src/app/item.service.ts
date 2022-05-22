import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { mmsaturn } from './mmsaturn';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // https://www.saturn.de/de/data/fundgrube/api/postings?limit=100000&offset=0
  private saturnItemsUrl = 'saturn/api/postings?limit=100000&offset=0';  // URL to web api

  // https://www.mediamarkt.de/de/data/fundgrube/api/postings?limit=100000&offset=0
  private mmItemsUrl = 'mediamarkt/api/postings?limit=100000&offset=0';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getSaturnData(): Observable<mmsaturn.RootObject> {
    //   const items = of(ITEMS);
    //   return items;
    return this.http.get<mmsaturn.RootObject>(this.saturnItemsUrl)
  }

  getMMData(): Observable<mmsaturn.RootObject> {
    //   const items = of(ITEMS);
    //   return items;
    return this.http.get<mmsaturn.RootObject>(this.mmItemsUrl)
  }
}

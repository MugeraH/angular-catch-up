import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  constructor(private http: HttpClient) {}

  // axios
  //getGifs
  getGifs(): Observable<any> {
    return this.http.get<any>(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=4&rating=g`
    );
  }

  //getMoreGifs
  getMoreGifs(count: number): Observable<any> {
    return this.http.get<any>(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=${count}&rating=g`
    );
  }

  //searchGIfs

  searchGifs(searchTerm: string): Observable<any> {
    return this.http.get<any>(
      `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  constructor(private http: HttpClient) {}

  //getGifs
  getGifs(): any {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=4&rating=g`
    );
      // .subscribe(
      //   (data) => {
      //     results = data;
      //   },
      //   (err) => {
      //     console.log('error');
      //   }
      // );

    // return results;
  }

  //getMoreGifs

  //search
}

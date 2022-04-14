import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { GifService } from 'src/app/services/http/gif.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  constructor(private http: HttpClient, private gifService: GifService) {}

  gifs: any[] = [];

  searchGif(form: NgForm) {
    let { searchTerm } = form.value;

    this.http
      .get<any>(
        ` https://api.giphy.com/v1/gifs/search?api_key=6fgd2gbJw4eCysU8OHkVlU0SBB04i6OS&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`
      )
      .subscribe(
        (data) => {
          this.gifs = data.data;
        },
        (err) => {
          console.log('error');
        }
      );

    form.reset();
  }
  getGifs(count: number): any {
     this.http
      .get<any>(`${environment.apiUrl}${count}&rating=g`)
      .subscribe(
        (data) => {
          data.data;
          // console.log(data.data);
          this.gifs = data.data;
        },
        (err) => {
          console.log('error');
        }
      );
  }

  ngOnInit(): void {
   

    this.gifs = this.getGifs(3);
    // console.log(
    //   this.gifService.getGifs().subscribe(
    //     (data: any) => {
    //       return data;
    //     },
    //     (err: any) => {
    //       console.log('error');
    //     }
    //   )
    // );
  }
}

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

  //WHAT WE HAD INITALLY
  // getGifs(count: number): any {
  //   this.http
  //     .get<any>(
  //       `https://api.giphy.com/v1/gifs/trending?api_key=6fgd2gbJw4eCysU8OHkVlU0SBB04i6OS&limit=${count}&rating=g`
  //     )
  //     .subscribe(
  //       (data) => {
  //         data.data;
  //         // console.log(data.data);
  //         this.gifs = data.data;
  //       },
  //       (err) => {
  //         console.log('error');
  //       }
  //     );
  // }

  //USING A SERVICE
  getGifs(count: number) {
    this.gifService.getMoreGifs(count).subscribe((data) => {
      this.gifs = data.data;
    });
  }
  //WHAT WE HAD INITALLY
  // searchGif(form: NgForm) {
  //   let { searchTerm } = form.value;

  //   this.http
  //     .get<any>(
  //       ` https://api.giphy.com/v1/gifs/search?api_key=6fgd2gbJw4eCysU8OHkVlU0SBB04i6OS&q=${searchTerm}&limit=2&offset=0&rating=g&lang=en`
  //     )
  //     .subscribe(
  //       (data) => {
  //         this.gifs = data.data;
  //       },
  //       (err) => {
  //         console.log('error');
  //       }
  //     );

  //   form.reset();
  // }

  //USING A SERVICE
  searchGif(form: NgForm) {
    let { searchTerm } = form.value;
    this.gifService.searchGifs(searchTerm).subscribe((data) => {
      this.gifs = data.data;
    });
    form.reset();
  }

  ngOnInit(): void {
    this.gifService.getGifs().subscribe((data) => {
      this.gifs = data.data;
    });
  }
}

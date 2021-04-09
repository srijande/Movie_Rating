import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute , private api:ApiService) {

  }
  movie_id: any
  movie: any
  ngOnInit(): void {
    this.movie_id = this.activatedRoute.snapshot.paramMap.get('movie_id');
    this.getMovie();
  }

    getMovie = () => {
      this.api.getOneMovies(this.movie_id).subscribe(
        data => {
          this.movie = data;
          // console.log(data);
        },
        error => {
          // console.log("error");
        }
      );

    }
    upvoteMovie = (movie:any) => {
      this.api.upvoteMovie(movie).subscribe(
        data => {
          // this.getMovies();
        },
        error => {
          // console.log("error");
        }
      );

    }

}

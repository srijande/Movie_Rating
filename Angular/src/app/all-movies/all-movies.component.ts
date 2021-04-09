import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  constructor(private api:ApiService) { }
  order: any
  reverse: any
  movies: any

  ngOnInit(): void {
    this.getMovies();

  }
  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
        // console.log(data);
      },
      error => {
        console.log("error");
      }
    );

  }
  upvoteMovie = (movie:any) => {
    this.api.upvoteMovie(movie).subscribe(
      data => {
        // this.getMovies();
      },
      error => {
        console.log("error");
      }
    );

  }


}

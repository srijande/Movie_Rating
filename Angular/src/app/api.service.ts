import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':  'application/json'});



  constructor(private http: HttpClient) { }




  getAllMovies(): Observable<any>{
    return this.http.get(this.baseurl + '/movies/',
    {headers: this.httpHeaders})
  }

  getOneMovies(id: any): Observable<any>{
    return this.http.get(this.baseurl + '/movies/' + id + '/',
    {headers: this.httpHeaders})
  }

  upvoteMovie(movie: any): Observable<any>{
    movie.upvotes++;
    return this.http.put(this.baseurl + '/movies/' + movie.id + '/', movie,
    {headers: this.httpHeaders})
  }




}

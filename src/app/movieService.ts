import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  Movies=[];
  private movieUrl = 'http://localhost:3000/api/movies';

  constructor(private http: HttpClient) { }
  getRemoteCustomers(): Observable<[any]>{
    return this.http.get<[any]>(this.movieUrl);     
  }
  addRemoteMovie(movie):Observable<any>{
    return this.http.post(this.movieUrl,movie);
  }
}
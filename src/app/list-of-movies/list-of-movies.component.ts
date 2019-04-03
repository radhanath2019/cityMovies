// import { Component, OnInit } from '@angular/core';
// import {Router} from "@angular/router";

// @Component({
//   selector: 'app-list-of-movies',
//   templateUrl: './list-of-movies.component.html',
//   styleUrls: ['./list-of-movies.component.scss'],
// })
// export class ListOfMoviesComponent implements OnInit {

//   constructor(private router:Router) { }

//   ngOnInit() {}
//   booking1(){
//     this.router.navigate(['/make-booking']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movieService';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.scss'],
})
export class ListOfMoviesComponent implements OnInit {
movies=[];
  constructor(private moviesService:MoviesService,private router:Router) { }

  
    ngOnInit() {
      this.moviesService.getRemoteCustomers().subscribe((result) => {this.movies = result;});
    
  }
  booking1(){
    this.router.navigate(['/make-booking']);
  }
}

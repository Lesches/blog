import { Injectable } from '@angular/core';
import {Post} from './post';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  posts = [
    new Post ({
      id: 0,
      title: 'Make America Great Again',
      author: 'President Trump',
      body: 'In America we worship G-d'
    }),

    new Post ({
      id: 1,
      title: 'Make America Great Again',
      author: 'Tucker Carlson',
      body: 'Facts work, why don\'t you get some?'
    }),

    new Post ({
      id: 2,
      title: 'Make America Great Again',
      author: 'President Trump',
      body: 'In America we worship G-d'
    }),

    new Post ({
      id: 3,
      title: 'Make America Great Again',
      author: 'President Trump',
      body: 'In America we worship G-d'
    }),
  ]
  constructor() {

  }

  getAllPosts(): Observable<Post[]>{
    return of(this.posts);
  }
}

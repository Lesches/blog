import { Injectable } from '@angular/core';
import {Post} from './post';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  loggedIn = false;
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
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ligula a rhoncus varius. Curabitur vitae lorem scelerisque, placerat arcu quis, semper justo. Curabitur eu faucibus nisl. Donec vestibulum est sed laoreet lacinia. Ut rhoncus felis risus. In iaculis vel diam mollis luctus. Vestibulum lobortis risus vel tellus sodales auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum nec velit vitae velit ultrices bibendum dapibus ut quam. Duis quis ipsum congue arcu efficitur euismod. Donec arcu elit, tempor nec odio vitae, hendrerit finibus nunc.'
    }),
  ]
  constructor() {

  }

  getAllPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostById(id): Observable<Post> {
    return of (this.posts[id]);
  }

  checkLogin(): Observable<boolean>{
    return of(this.loggedIn);
  }

  setLoginVal(newVal: boolean): void {
    this.loggedIn = newVal;
  }

 }

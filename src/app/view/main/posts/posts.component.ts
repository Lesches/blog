import { Component, OnInit } from '@angular/core';
import {Post} from '../../../model/post';
import {DummyService} from '../../../model/dummy.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Post[];
  constructor(private blog: DummyService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.blog.getAllPosts().subscribe(
      res => this.posts = res
    );
  }

}

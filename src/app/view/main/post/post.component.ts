import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DummyService} from '../../../model/dummy.service';
import {Post} from '../../../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post: Post;
  constructor(private blog: DummyService, private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.paramMap.subscribe(pm => this.getPost(pm.get('id'))
    );
  }

  getPost(id): void {
    this.blog.getPostById(id).subscribe(
      res => {
        this.post = res;
        console.log(this.post);
      }
  );
    }


}

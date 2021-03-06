import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
post$: Array<PostModel> = [];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }
getAllPost(){
  return this.postService.getAllPost( ).subscribe(posts =>{
    this.post$ = posts;
  })
}
}

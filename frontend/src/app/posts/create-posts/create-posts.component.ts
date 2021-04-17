import { SubRreditModel } from './../../subrredit/subrredit.response';
import { PostPayload } from './../CreatePost.payload';
import { SubrreditService } from './../../subrredit/subrredit.service';
import { PostService } from './../../shared/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
createPostForm:FormGroup;
PostPayload:PostPayload;
subReddit:Array<SubRreditModel>;
  constructor(private router:Router,private postService:PostService,
    private subrredirService:SubrreditService,private subrreditSerice:SubrreditService) {

    this.PostPayload = {
      postName:'',
      url: '',
      description:'',
      subrreditName:''
    }
  }

  ngOnInit(): void {
  this.createPostForm = new FormGroup({
    postName:new FormControl('',Validators.required),
    url:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    subrreditName:new FormControl('',Validators.required)


  });
  this.subrredirService.getAllSubrredit().subscribe(data =>{
    this.subReddit = data;
  }, error =>{
    throwError(error);
  })
  }
  createPost() {
    this.PostPayload.postName = this.createPostForm.get("postName").value;
    this.PostPayload.description = this.createPostForm.get("description").value
    this.PostPayload.url = this.createPostForm.get("url").value
    this.PostPayload.subrreditName = this.createPostForm.get("subrreditName").value

  this.postService.createPost(this.PostPayload).subscribe(data =>{
    this.router.navigateByUrl("/");
  }, error =>{
    throwError(error);
  });
  }
  discardPost() {

    this.router.navigateByUrl('/');
  }
}

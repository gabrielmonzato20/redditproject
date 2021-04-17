import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment"
import { PostPayload } from '../posts/CreatePost.payload';
import { PostModel } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  createPost(postPayload: PostPayload):Observable<any> {
    return this.http.post(environment.apiUrl+"/api/posts/",postPayload);
  }

  constructor(private http:HttpClient) { }

  getAllPost(): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>(environment.apiUrl+"/api/posts/")
  }
}

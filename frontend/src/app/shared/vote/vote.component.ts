import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
    faArrowUp=faArrowUp;
    faArrowDown=faArrowDown;
    upvoteColor: string;
    downvoteColor: string;

  @Input() post: PostModel;
  constructor() { }

  ngOnInit(): void {

  }
  upvotePost(){
    console.log("hello")
  }

  downvotePost(){
    console.log("hello")
  }

}

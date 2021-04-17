import { SubRreditModel } from './../subrredit.response';
import { SubrreditService } from 'src/app/subrredit/subrredit.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-lis-sub-reddit',
  templateUrl: './lis-sub-reddit.component.html',
  styleUrls: ['./lis-sub-reddit.component.css']
})
export class LisSubRedditComponent implements OnInit {
listSubRredit:Array<SubRreditModel>;
  constructor(private subrreditService:SubrreditService) {

  }

  ngOnInit(): void {

    this.subrreditService.getAllSubrredit().subscribe(data =>{
      this.listSubRredit = data
    },error=>{
      throwError(error);
    })
  }


}

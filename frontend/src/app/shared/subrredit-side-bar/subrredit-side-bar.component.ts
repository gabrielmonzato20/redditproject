import { Component, OnInit } from '@angular/core';
import { SubRreditModel } from 'src/app/subrredit/subrredit.response';
import { SubrreditService } from 'src/app/subrredit/subrredit.service';

@Component({
  selector: 'app-subrredit-side-bar',
  templateUrl: './subrredit-side-bar.component.html',
  styleUrls: ['./subrredit-side-bar.component.css']
})
export class SubrreditSideBarComponent implements OnInit {
  subrredits: Array<SubRreditModel>;
  display:Boolean

  constructor(private subrreditService:SubrreditService) {
    this.subrreditService.getAllSubrredit().subscribe(data =>{
    if(data.length > 4){
      this.subrredits = data.splice(0,3);
      this.display=true;
    }else{
      this.subrredits = data;
    }
    })
   }

  ngOnInit(): void {
  }

}

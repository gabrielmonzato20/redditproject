import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubRreditModel } from '../subrredit.response';
import { SubrreditService } from '../subrredit.service';

@Component({
  selector: 'app-create-subrredit',
  templateUrl: './create-subrredit.component.html',
  styleUrls: ['./create-subrredit.component.css']
})
export class CreateSubrreditComponent implements OnInit {
createSubrreditForm:FormGroup;
subrreditModel:SubRreditModel
title = new FormControl("");
description = new FormControl("");

  constructor(private router:Router,private subrreditService:SubrreditService) {
    this.createSubrreditForm = new FormGroup({
      title: new FormControl("" , Validators.required),
      description: new FormControl("",  Validators.required)
    });
    this.subrreditModel = {
      name:"",
      description:""
    }

   }

  ngOnInit(): void {
  }
discart(){
  this.router.navigateByUrl("/")
}
createSubReddit(){
  this.subrreditModel.name = this.createSubrreditForm.get("title").value;
  this.subrreditModel.description=this.createSubrreditForm.get("description").value;
  this.subrreditService.createSubrredit(this.subrreditModel).subscribe(data =>{
this.router.navigateByUrl("/lists-subreddits");
  }, error=>{
throwError(error);
  })
}
}

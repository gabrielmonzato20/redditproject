import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubRreditModel } from './subrredit.response';

@Injectable({
  providedIn: 'root'
})
export class SubrreditService {

  constructor(private httpClient:HttpClient) { }

  getAllSubrredit(): Observable<Array<SubRreditModel>>{
    return this.httpClient.get<Array<SubRreditModel>>(environment.apiUrl+"/api/subreddit")
  }

  createSubrredit(model:SubRreditModel):Observable<SubRreditModel>{
return this.httpClient.post<SubRreditModel>(environment.apiUrl+"/api/subrredit", model);
  
}
}

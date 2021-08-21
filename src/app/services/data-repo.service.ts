import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRepoService {

  private _user:string;
  constructor(private httpClient:HttpClient) { 
    
  }

  basicURL = "https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/";
  
  // This method is used to fetch users
  getUsers(){
    let URL = this.basicURL + "users";
    //Making http request
    return this.httpClient.get(URL);
  }

  getCompaines(){
    let URL = this.basicURL + "companies";
    //Making http request
    return this.httpClient.get(URL);
  }

  getCompanyDetailsById(compId:string){
    const URL = this.basicURL + "companies?id="+compId;
    return this.httpClient.get(URL);
  }

  get loggedInUser(){
    return this._user;
  }

  set loggedInUser(userMail:string){
    this._user = userMail;
  }

}

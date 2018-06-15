import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/user';

/*
  Generated class for the UserProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  url: string = "http://rest.learncode.academy/api/alan/users";

  constructor(public http: Http) {
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setToken(token){
    localStorage.setItem("token", token);
  }

  hasToken(){
    return !!localStorage.getItem("token"); 
  }

  insertUser(user:User){
    return this.http.post(this.url, {
      "name":user.name,
      "email":user.email,
      "senha":user.senha
    }).map((response: Response) => (response.json()));
  }

  singIn(email, password){
    return this.http.post(this.url + "/signin", {
      email,
      password
    }).map((response:Response) => {
      let r = response.json();
      this.setToken(r.token);
      return r;
    });
  }

  getUsers(){
    return this.http.get(this.url + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

}
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the UserProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  url: string = "http://rest.learncode.academy/api/alan/posts";

  constructor(public http: Http) {
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setToken(token){
    localStorage.setItem("token", token);
  }

  likePost(post){
    return this.http.put(this.url+"/"+post.id, post).map((response: Response) => (response.json()));
  }

  hasToken(){
    return !!localStorage.getItem("token"); 
  }

  insertPost(post){
    post.likes = 0;
    return this.http.post(this.url, {
      "user": localStorage.getItem('user'),
      "texto": post.texto,
      "likes": post.likes      
    }).map((response: Response) => (response.json()));
  }

  getPosts(){
    return this.http.get(this.url)
      .map((response:Response)=>(response.json()));
  }

}
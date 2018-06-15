import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public postProvider: PostProvider
  ) {}

  ionViewDidEnter() {
    
    this.postProvider.getPosts().subscribe(
      data => {
        this.lista = data;
        console.log(this.lista);
      },
      error => console.log(error)
    ); 
    
  }

}

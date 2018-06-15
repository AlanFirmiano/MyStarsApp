import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/posts';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  texto:String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public postProvider: PostProvider
  ) {}

  novoPost(){
    this.postProvider.insertPost(this.texto).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    ); 
  }

}

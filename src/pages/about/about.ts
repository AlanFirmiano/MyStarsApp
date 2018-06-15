import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/posts';
import { HomePage } from '../home/home';
import { Post } from '../../models/post';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user:String;
  post:Post = new Post;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public postProvider: PostProvider,
    public toastCtrl: ToastController
  ) {
    this.user = localStorage.getItem('user');
  }

  novoPost(){
    this.postProvider.insertPost(this.post).subscribe(
      data => {
        this.presentToast();
      },
      error => console.log(error)
    ); 
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Postado !',
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

}

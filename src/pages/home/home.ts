import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
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
    public postProvider: PostProvider,
    public toastCtrl: ToastController
  ) {}

  like(post){
    post.like = post.like+1;
    this.postProvider.likePost(post).subscribe(
      data => {
        this.presentToast();
      },
      error => console.log(error)
    );
  }
  ionViewDidEnter() {
    
    this.postProvider.getPosts().subscribe(
      data => {
        this.lista = data;
        console.log(this.lista);
      },
      error => console.log(error)
    ); 
    
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Like!!!',
      duration: 3000,
      position: "top"
    });
    toast.present();
  }
}

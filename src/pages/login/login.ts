import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = new User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userProvider: UserProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logon(){
    this.userProvider.insertUser(this.user)
        .subscribe(
          data => {
            console.log(data)
            localStorage.setItem("user",data.name);
            this.navCtrl.setRoot(TabsPage);
          },
          error => console.log(error)
        );                 
  }
}

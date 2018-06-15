import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user';

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
  name: String;
  email: String;
  password: String;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logon(){
    this.userProvider.insertUser(this.name,
                                this.email,
                                this.password)
        .subscribe(
          data => {
            console.log(data)
            this.navCtrl.pop();
          },
          error => console.log(error)
        );                 
  }
}

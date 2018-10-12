import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { hotels } from '../../app/hotels';
import { HotelsPage } from '../hotels/hotels';
declare var firebase;

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email;
  password;
  semail;
  spassword;
  sname;
  validation;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  next() {


    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((data) => {
      var userid = firebase.auth().currentUser.uid

      firebase.database().ref('bookings/' + userid).push({

      })
      console.log(userid);

      this.navCtrl.push(HotelsPage, { em: this.email });
      console.log(this.email);
      console.log(data);
    }, (error) => {
      var errorCode = error.code;
      var errorEmail = error.message;
      console.log(errorEmail);

      if (errorEmail = "There is no user record corresponding to this identifier") {

        alert('not available')


      }

    }
    )
  }

  signup() {






    firebase.auth().createUserWithEmailAndPassword(this.semail, this.spassword).then(() => {
      var userid = firebase.auth().currentUser.uid

      console.log(userid);
      firebase.database().ref('bookings/' + userid).set({

      })

      this.spassword = ""
      this.sname = ""
      this.semail = ""
      this.validation = "Successful"
    }, (error) => {
      var errorCode = error.code;
      var errorEmail = error.message;
      console.log(errorEmail);

      if (errorEmail = "auth/invalid-email") {
        console.log("invalid Password or email");
        this.validation = "invalid email";

      }
    })


  }





}

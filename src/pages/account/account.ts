import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

declare var firebase;

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
array=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    var userid = firebase.auth().currentUser.uid;

    firebase.database().ref('bookings/'+userid).on('value', (data: any) => {

      var infor = data.val();

      console.log(infor);

     var keys: any = Object.keys(infor);

     for (var i = 0; i < keys.length; i++) {
       var k = keys[i];

     let obj = {
          username: infor[k].username,
       checkin: infor[k].check_in,
       checkout: infor[k].check_out,
       price: infor[k].room_Price,
         numberofadults: infor[k].noOfadults,
        numberofchildren: infor[k].noOfchildren,
       totalprice: infor[k].total_price,
         hotelname:infor[k].hotelname,

         key: k 
        
     }


        this.array.push(obj);

       console.log(this.array);


     }

      






    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  account(){
    this.navCtrl.push(AccountPage);
  }
  cancel(a){

    var userid = firebase.auth().currentUser.uid;
    return firebase.database.ref('bookings/'+ userid).child(a).remove();
  }
  signout(){

    firebase.auth().signOut().then(function() {
      this.navCtrl.push(SignupPage);
    }).catch(function(error) {
      alert("couldnt signout");
    });
  }

}

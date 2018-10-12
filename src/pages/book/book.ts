import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { SignupPage } from '../signup/signup';

declare var firebase;
/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  array = [];
  i;

  id: number;
  name: string;
  des: string;
  address:string;
  price: any;
  imageUrl: string;
  booking = [];
  childnumber: number = 0;
  adultnumber: number = 1;
  totalprice;
  myDate;
  myDatew;
email;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.array = this.navParams.get("obj");
    this.i = this.navParams.get("index");
    this.email=this.navParams.get("email");
    this.id = this.array[this.i].id;
    this.name = this.array[this.i].name;
    this.imageUrl = this.array[this.i].imageUrl;
    this.address = this.array[this.i].address;
    this.des = this.array[this.i].des;
    this.price = this.array[this.i].price;
    console.log(this.array[this.i]);


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

  up() {


    this.childnumber = this.childnumber + 1;
  }
  upadult() {
    this.adultnumber = this.adultnumber + 1;
  }
  downadult() {
    this.adultnumber = this.adultnumber -1;
    
    if (this.adultnumber <= 1) {
      this.adultnumber = 1;

    }
  }
  down() {


    this.childnumber = this.childnumber - 1;

    if (this.childnumber <= 0) {
    this.childnumber = 0;

    }

  }

  book(){

this.totalprice = this.price *(this.childnumber+ this.adultnumber);


console.log("User :"+this.email)
console.log("Adults : "+this.adultnumber)
console.log("Children :"+ this.childnumber)
console.log("Price "+this.price+ " Total Price :"+this.totalprice);
console.log(this.id = this.array[this.i].id)
console.log(this.name = this.array[this.i].name)
console.log("check in "+ this.myDatew+"check out "+this.myDate)

var userid = firebase.auth().currentUser.uid
firebase.database().ref('bookings/'+ userid).push({
  username: this.email,
  noOfadults : this.adultnumber,
  noOfchildren :this.childnumber,
  hotelname:this.name = this.array[this.i].name,
  check_in : this.myDatew,
  check_out :this.myDate,
  room_Price :this.price,
  total_price:this.totalprice


});

this.navCtrl.push(AccountPage);

  }
  back(){
    this.navCtrl.pop();
  }

  account(){
    this.navCtrl.push(AccountPage);
  }
  signout(){

    firebase.auth().signOut().then(function() {
      this.navCtrl.push(SignupPage);
    }).catch(function(error) {
      alert("couldnt signout");
    });
  }

}

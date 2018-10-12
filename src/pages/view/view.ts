import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookPage } from '../book/book';
import { AccountPage } from '../account/account';
import { SignupPage } from '../signup/signup';
declare var firebase;
/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  index;
  array=[];
  id:number;
  name:string;
  des:string;
  address:string;
  price:any;
  imageUrl:string;
  email;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  this.index= this.navParams.get("obj");
this.array=this.navParams.get("objarray");
this.email= this.navParams.get("email");

this.id = this.array[this.index].id;
this.name = this.array[this.index].name;
this.  imageUrl= this.array[this.index].imageUrl;
this.address=this.array[this.index].address;
this. des = this.array[this.index].des;
this.price= this.array[this.index].price;

console.log(this.index);
console.log(this.array);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }
book(){
  this.navCtrl.push(BookPage,{obj:this.array,index:this.index,email:this.email});
}
back(){
  this.array=[];
  this.navCtrl.pop()
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

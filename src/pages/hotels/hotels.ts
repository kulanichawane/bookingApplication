import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {hotels} from '../../app/hotels'
import { ViewPage } from '../view/view';
import { AccountPage } from '../account/account';
import { SignupPage } from '../signup/signup';
declare var firebase;
/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {

  email;
pet;
  twoStar = [new hotels(1,'Protea hotel',"2 bedrooms 1 bathroom ","Pretoria",1300,"../../assets/imgs/295955_desktop-wallpaper-hd-widescreen.jpg"),
    new hotels(2,"SunPark hotel","4 bedrooms 2 bathroom ","Pretoria",1280,"../../assets/imgs/1.jpg"),
    new hotels(3,"NoordSide hotel","5 bedrooms 2 bathroom ","Pretoria",1250,"../../assets/imgs/2.jpg")];

    threeStar = [new hotels(200,'TargetWays hotel',"2 bedrooms 1 bathroom ","Pretoria",2210,"../../assets/imgs/3.jpg"),
    new hotels(210,"DonPark hotel","4 bedrooms 2 bathroom ","Pretoria",2250,"../../assets/imgs/4.jpg"),
    new hotels(220,"Monarch hotel","5 bedrooms 2 bathroom ","Pretoria",3200,"../../assets/imgs/5.jpg")];

    fourStar = [new hotels(300,'FrontView hotel',"2 bedrooms 1 bathroom ","Pretoria",4200,"../../assets/imgs/6.jpg"),
    new hotels(320,"Palazzo hotel","4 bedrooms 2 bathroom ","Pretoria",4300,"../../assets/imgs/7.jpg"),
    new hotels(330,"Venetian hotel","5 bedrooms 2 bathroom ","Pretoria",5200,"../../assets/imgs/8.jpg")];

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet ="twoStarx"
this.email =this.navParams.get("em");

  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');


this.twoStar
console.log(this.twoStar);

    
  
    
  }

  view(a){
  

    this.navCtrl.push(ViewPage,{obj:a,objarray:this.twoStar,email:this.email})

    
  }

  view2(a){
 

    this.navCtrl.push(ViewPage,{obj:a,objarray:this.threeStar,email:this.email})

    
  }
  view3(a){
  

    this.navCtrl.push(ViewPage,{obj:a,objarray:this.fourStar,email:this.email})

    
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

import { Component } from '@angular/core';
import { IonicPage, NavController,  ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-modal',
  templateUrl: 'details-modal.html',
})
export class DetailsModalPage {

  character:any;
  comics:any = [];
  info:string = 'comics';

  constructor(public navCtrl: NavController,private viewCtrl: ViewController, public navParams: NavParams) {
    this.character = navParams.get("character");
    this.comics = this.character.comics;
    //console.log(this.character);
    
  }

  ionViewDidLoad() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  swipe(event){
    if(event.direction == 2){
      this.info = 'series';
    } else if (event.direction){
      this.info = 'comics';
    }
    
  }

}

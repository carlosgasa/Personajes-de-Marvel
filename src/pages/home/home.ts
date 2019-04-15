import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  characters:any = {};

  constructor(
    public navCtrl: NavController, 
    private marvel: MarvelProvider,
    private loadingCtrl: LoadingController
    ) {
      
      let loader = this.loadingCtrl.create({
        duration: 1000
      });
      loader.present();
    
      marvel.getCharacters(50)
      .then( (data:any) => {
        this.characters = data.data.results;
        console.log(this.characters);
        
        loader.dismiss;
      })
      .catch(err =>{
        alert("Error");
      });

  }

  ionViewDidLoad() {
    
  }
}

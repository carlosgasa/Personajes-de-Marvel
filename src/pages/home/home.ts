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

  characters: any = [];

  constructor(
    public navCtrl: NavController,
    private marvel: MarvelProvider,
    private loadingCtrl: LoadingController,
  ) { 

    this.loadData();
  }

  ionViewDidLoad() {
    
  }

  loadData() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.marvel.getCharacters(10)
      .then((data: any) => {
        this.characters = data.data.results;
        console.log(this.characters);
        loading.dismissAll();
      })
      .catch(err => {
        alert("Error");
      });
  }
}

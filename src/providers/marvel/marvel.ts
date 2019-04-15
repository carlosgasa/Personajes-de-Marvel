import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariablesProvider } from '../global-variables/global-variables';
/*
  Generated class for the MarvelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelProvider {

  constructor(public http: HttpClient) {}

  public getCharacters(limit:number = 50, letter:string = "A"){
    return new Promise(resolve => {
      this.http.get(
        GlobalVariablesProvider.api_url +
        'characters' + '?' +
        'nameStartsWith=' + letter + '&' +
        'limit=' + limit + '&' +
        'apikey=' + GlobalVariablesProvider.api_key + '&' + 
        'ts=' + GlobalVariablesProvider.timestamp + '&' +
        'hash=' + GlobalVariablesProvider.hash)
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          }
          );
    });
  }
}

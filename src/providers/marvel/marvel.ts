import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariablesProvider } from '../global-variables/global-variables';
import { Md5 } from 'ts-md5/dist/md5';
/*
  Generated class for the MarvelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelProvider {

  timestamp:string;

  constructor(public http: HttpClient) {
    this.timestamp = new Date().valueOf().toString();    
  }

  public getCharacters(limit:number = 50, letter:string = "A"){
    return new Promise(resolve => {
      this.http.get(
        GlobalVariablesProvider.api_url +
        'characters' + '?' +
        'nameStartsWith=' + letter + '&' +
        'limit=' + limit + '&' +
        'apikey=' + GlobalVariablesProvider.public_api_key + '&' + 
        'ts=' + this.timestamp + '&' +
        'hash=' + this.getHash())
          .subscribe(data => {           
            resolve(data);
          }, err => {
            console.log(err);
          }
          );
    });
  }

  getHash():string | Int32Array{   
    return Md5.hashStr(this.timestamp+GlobalVariablesProvider.private_api_key+GlobalVariablesProvider.public_api_key);
  }
}

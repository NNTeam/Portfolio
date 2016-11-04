import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FirebaseServiceService {
  links = [];
  constructor(private http: Http) { }

  checkF(){
    console.log(this.http.get('https://portfolio-74176.firebaseio.com/.json'));
  }

  fbGetData(){
    console.log("Witam");
    firebase.database().ref('/Sites').on('child_added', (snapshot) => {
      this.links.push(snapshot.val());
      console.log(snapshot.val());
    })
    this.links.push("+test")
    return this.links;
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { AngularFire } from 'angularfire2';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
user: string;
  firebase: FirebaseServiceService;
    constructor(public af: AngularFire, private router: Router) { 
  }
  login() {
    this.af.auth.login();
    this.af.auth.subscribe(user => {
      if (user){
        this.user = user.google.displayName
      }
      else{

      }
    }
    );
  }

  logout() {
     this.af.auth.logout();
    this.user = '';
     this.router.navigate(['/']);

  }

  ngOnInit() {    
  }

  checkAuth(){
    this.af.auth.subscribe(user => {
    if(user) {
    // user logged in
    this.user = user.google.displayName;
    }
    return this.user;
  })
  }


}

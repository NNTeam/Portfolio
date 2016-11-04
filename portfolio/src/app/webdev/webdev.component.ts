import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

class test{
  id: number;
  name: string;
}

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss'],
  providers: [HeroService],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class WebdevComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }
  temp: test;
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public af: AngularFire) {
    this.items = af.database.list('/items');
    this.temp.id = 2;
    this.temp.name = 'Nyczu'
  }

  ngOnInit() {
    this.getHeroes();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getHeroes();
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  del(object:any){
    this.af.database.list('/items').remove(object)
  }

  check(object:any){
  console.log(object)
  }

  send(text:test){
    this.af.database.list('/items').push(text)
  }

}

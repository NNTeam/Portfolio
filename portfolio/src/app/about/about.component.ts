import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
        animate('0.5s ease')
      ]),
      transition(':leave', [
        style({
          display: 'none'
        })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
    });
  }

}

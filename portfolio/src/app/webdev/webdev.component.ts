import {
  Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from './project/project';

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'magnetic',
    info: 'strona internetowa magnetic.org.pl',
    imgs: ['./assets/img/projects/magnetic/1.png',
      './assets/img/projects/magnetic/2.png',
      './assets/img/projects/magnetic/3.png',
      './assets/img/projects/magnetic/4.png'
    ]
  },
  {
    id: 2,
    name: 'rivers',
    info: 'strona internetowa rivers.pl',
    imgs: ['./assets/img/projects/rivers/1.png',
      './assets/img/projects/rivers/2.png',
      './assets/img/projects/rivers/3.png'
    ]
  },
  {
    id: 3,
    name: 'materialy-dydaktyczne',
    info: 'zarządzanie materiałami dydaktycznymi prz',
    imgs: ['./assets/img/projects/materialy-dydaktyczne/1.png',
      './assets/img/projects/materialy-dydaktyczne/2.png',
      './assets/img/projects/materialy-dydaktyczne/3.png',
      './assets/img/projects/materialy-dydaktyczne/4.png'
    ]
  }
];

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss'],
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
        style({
          display: 'none'
        })
      ])
    ])
  ]
})
export class WebdevComponent implements OnInit {
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

  projects = PROJECTS;
  selectedProject: Project;

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}

import {
  Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from './project/project';
import { ProjectService } from './project/project.service';



@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss'],
  providers: [ProjectService],
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

  projects: Project[];
  selectedProject: Project;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
    });
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}

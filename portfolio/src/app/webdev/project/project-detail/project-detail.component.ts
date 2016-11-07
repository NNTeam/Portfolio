import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Project } from './../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  @Input()
  project: Project;

  isActive(url: string) {
    return url === this.project.imgs[0];
  }

}

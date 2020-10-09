import { Component, OnInit } from '@angular/core';

import { Project } from './render.groups';
import * as renders from './render.groups';
import { fade } from 'src/animations';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css'],
  animations: [fade]
})
export class RenderComponent implements OnInit {

  projects: Project[];
  selectedProject: Project;
  selectedRenderIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.projects = renders.projects;
    this.selectedProject = this.projects[0];
    this.selectedRenderIndex = 0;
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    this.selectedRenderIndex = 0;
  }

  nextPhoto(): void {
    if (this.selectedRenderIndex > this.selectedProject.rendersPaths.length - 1) {
      this.selectedRenderIndex = 0;
    } else {
      this.selectedRenderIndex++;
    }
  }

  previousPhoto(): void {
    if (this.selectedRenderIndex === 0) {
      this.selectedRenderIndex = this.selectedProject.rendersPaths.length - 1;
    } else {
      this.selectedRenderIndex--;
    }
  }
}

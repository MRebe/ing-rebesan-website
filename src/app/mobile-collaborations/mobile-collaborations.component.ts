import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborations/collaborations.collaborators';
import * as collaboratorsList from '../collaborations/collaborations.collaborators';

@Component({
  selector: 'app-mobile-collaborations',
  templateUrl: './mobile-collaborations.component.html',
  styleUrls: ['./mobile-collaborations.component.css']
})
export class MobileCollaborationsComponent implements OnInit {

  collaborators: Collaborator[];

  constructor() { }

  ngOnInit(): void {
    this.collaborators = collaboratorsList.collaborators;
  }

}

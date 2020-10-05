import { Component, OnInit } from '@angular/core';

import { Collaborator } from './collaborations.collaborators';
import * as collaboratorsList from './collaborations.collaborators';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent implements OnInit {

  collaboratorsMap: Collaborator[][];
  COLUMNS = 4;

  constructor() { }

  ngOnInit(): void {
    const collaborators = collaboratorsList.collaborators;
    // split in rows

    this.collaboratorsMap = [];

    A: for (let row = 0; ; row++) {
      this.collaboratorsMap[row] = []
      for (let column = 0; column < this.COLUMNS; column++) {
        const nextIndex = this.COLUMNS*row + column;
        if (nextIndex >= collaborators.length) {
          break A;
        }
        this.collaboratorsMap[row][column] = collaborators[nextIndex];
      }
    }
    
  }

}

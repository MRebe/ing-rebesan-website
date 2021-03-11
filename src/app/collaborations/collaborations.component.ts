import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

import { Collaborator } from './collaborations.collaborators';
import * as collaboratorsList from './collaborations.collaborators';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent implements OnInit, AfterViewInit {

  collaborators: Collaborator[];

  constructor() { }

  ngOnInit(): void {
    this.collaborators = collaboratorsList.collaborators;
  }

  ngAfterViewInit(): void {
    const from = {opacity: 0};
    const to = {opacity: 1, duration: .7, delay: .2};

    gsap.fromTo('.ir-collaborations-title', from, to);
    gsap.fromTo('.ir-collaborations-text', from, to);
    if (window.innerWidth > 600) {
      gsap.fromTo('.ir-collaborations-list-item', {top: '-200px', opacity: 0}, {top: 0, opacity: 1, duration: 1, stagger: .3})
    } else {
      gsap.fromTo('.ir-collaborations-list-item', {left: '-200px', opacity: 0}, {left: 0, opacity: 1, duration: 1, stagger: .3})
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Program } from '../render/render.programs';
import * as programs from '../render/render.programs';

@Component({
  selector: 'app-mobile-render',
  templateUrl: './mobile-render.component.html',
  styleUrls: ['./mobile-render.component.css']
})
export class MobileRenderComponent implements OnInit {

  programs: Program[];

  constructor() { }

  ngOnInit(): void {

    this.programs = programs.programs;
  }

}

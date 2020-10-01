import { Component, OnInit } from '@angular/core';

import { ImageTemplate } from './../home/home.templates';
import * as enumerations from './../home/home.templates';

import { fade } from 'src/animations';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.css'],
  animations: [fade]
})
export class MobileHomeComponent implements OnInit {

  selectedTemplate: ImageTemplate;
  currentTemplateIndex = 0;
  templatesNumber: number;

  swapImg1: string;
  swapImg2: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedTemplate = enumerations.templates[this.currentTemplateIndex];
    this.swapImg1 = this.selectedTemplate.imagePath;
    this.templatesNumber = enumerations.templates.length;

    this.startIntervals();
  }

  private startIntervals() {
    setInterval(() => {
      this.rotateTemplate();
    }, 10 * 1000);
  }

  private rotateTemplate(): void {
    if (this.currentTemplateIndex < this.templatesNumber - 1) {
      this.currentTemplateIndex++;
    } else {
      this.currentTemplateIndex = 0;
    }
    this.loadTemplate();
  }

  private loadTemplate() {
    this.selectedTemplate = enumerations.templates[this.currentTemplateIndex];
    if (this.swapImg1) {
      this.swapImg1 = null;
      this.swapImg2 = this.selectedTemplate.imagePath;
    } else {
      this.swapImg2 = null;
      this.swapImg1 = this.selectedTemplate.imagePath;
    }
  }

}

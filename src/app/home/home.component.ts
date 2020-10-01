import { Component, OnInit } from '@angular/core';

import { fade } from '../../animations';

import { ImageTemplate } from './home.templates';
import * as enumerations from './home.templates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade]
})
export class HomeComponent implements OnInit {

  selectedTemplate: ImageTemplate;
  currentTemplateIndex = 0;
  templatesNumber: number;

  intervalId: any;

  swapImg1: string;
  swapImg2: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedTemplate = enumerations.templates[this.currentTemplateIndex];
    this.swapImg1 = this.selectedTemplate.imagePath;
    this.templatesNumber = enumerations.templates.length;

    this.startInterval();

  }

  private startInterval() {
    this.intervalId = setInterval(() => {
      this.rotateTemplate();
    }, 10 * 1000);
  }
  private restartInterval() {
    clearInterval(this.intervalId);
    this.startInterval();
  }

  private rotateTemplate(): void {
    if (this.currentTemplateIndex < this.templatesNumber - 1) {
      this.currentTemplateIndex++;
    } else {
      this.currentTemplateIndex = 0;
    }
    this.loadTemplate();
  }

  public switchTemplate(index: number): void {
    this.currentTemplateIndex = index;
    this.loadTemplate();
    this.restartInterval();
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

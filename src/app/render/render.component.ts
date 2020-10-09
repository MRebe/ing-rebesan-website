import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Render } from './render.groups';
import * as renders from './render.groups';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit, AfterViewInit {

  renderGroups: Render[];
  @ViewChild('scrollableDiv') scrollableDiv: ElementRef;
  @ViewChild('vanishingDiv') vanishingDiv: ElementRef;

  @ViewChildren('group') groups: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
    this.renderGroups = renders.renderGroups;
    window.onscroll = () => {
        console.log('scrolling');
        // $('.ir-vanishing-block').css('opacity', 1 - $(window).scrollTop() / 250);
    };
  }

  ngAfterViewInit() {

    // Hide text on scroll variables
    const scrollableElement = this.scrollableDiv.nativeElement;
    const topScrollableElement = scrollableElement.offsetTop;
    const vanishingElement = this.vanishingDiv.nativeElement;
    const height = vanishingElement.clientHeight;

    // Scrollover effect variables

    // http://jsfiddle.net/xtyus/1/
    let originalsOffset = [];


    scrollableElement.onscroll = () => {
      // Hide text on scroll code
      const scrolled = scrollableElement.scrollTop;
      const newOpacity = 1 - scrolled / height;
      vanishingElement.style.opacity = newOpacity;

      // Scrollover effect code
      const groupsArray = [...scrollableElement.children];
      if (!originalsOffset.length){
        originalsOffset = groupsArray.map(e => e.offsetTop);
      }

      for (let i = 0; i < groupsArray.length; i++) {
        if (scrolled >= originalsOffset[i]) {
          // if not contained
          groupsArray[i].classList.add('stick');
        } else {
          groupsArray[i].classList.remove('stick');
        }
      }



    };
  }

}

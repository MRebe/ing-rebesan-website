import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Program } from './render.programs';
import * as programs from './render.programs';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit, AfterViewInit, OnDestroy {

  scrollerClassSelector = '.ir-render';
  programs: Program[];

  timelines = [];
  scrollTriggers = [];

  constructor() { }

  ngOnInit(): void {
    this.programs = programs.programs;
    gsap.delayedCall(1, () => ScrollTrigger.refresh());
  }

  ngOnDestroy(): void {
    this.scrollTriggers.forEach(t => t.kill());
    this.timelines.forEach(t => {
      if (t.scrollTrigger) {
        t.scrollTrigger.kill();
      }
      t.kill();
    });
  }

  ngAfterViewInit(): void {

    const from = {opacity: 0};
    const to = {opacity: 1, duration: .7, delay: .2};

    gsap.fromTo('.ir-render-title', from, to);
    gsap.fromTo('.ir-render-subtitle', from, to);
    gsap.fromTo('.ir-render-programs-title', from, to);
    gsap.fromTo('.ir-comparison', from, to);

    gsap.utils.toArray('.ir-comparison').forEach((section: Element) => {
      let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            scroller: this.scrollerClassSelector,
            start: "center center",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + (section as HTMLElement).offsetWidth, 
            pin: true,
            scrub: true,
            pinSpacing: 'margin',
            anticipatePin: 1
          },
          defaults: {ease: "none"}
        });
      // animate the container one way...
      tl.fromTo(section.querySelector(".ir-cormparison-image-after"), { xPercent: 100, x: 0}, {xPercent: 0})
        // ...and the image the opposite way (at the same time)
        .fromTo(section.querySelector(".ir-cormparison-image-after img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);

      this.timelines.push(tl);
    });

    gsap.utils.toArray('.ir-render-program').forEach((elem: Element) => {
      this.hide(elem);

      const trig = ScrollTrigger.create({
        trigger: elem,
        scroller: this.scrollerClassSelector,
        onEnter: () => { this.animateFrom(elem, 1) },
        onEnterBack: () => { this.animateFrom(elem, -1) },
        onLeave: () => { this.hide(elem) }
      });

      this.scrollTriggers.push(trig);

    });

    const trig = ScrollTrigger.create({
      trigger: '.ir-render-rights-text',
      scroller: this.scrollerClassSelector,
      start: 'bottom bottom',
      onEnter: () => { 
        gsap.fromTo('.ir-render-rights-text', {bottom: '-50px'}, {bottom: 0, duration: 1}); 
      },
      onLeave: () => {
        gsap.to('.ir-render-rights-text', {bottom: 0, duration: .2}); 
      }
    });

    this.scrollTriggers.push(trig);
  }

  animateFrom(elem: Element, direction: number): void {
      direction = direction | 1;

      var x = 0, y = 0;
      if (elem.classList.contains('ir-render-reverse')) {
        x = 400;
        y = 0;
      } else {
        x = -400;
        y = 0;
      }

      gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 2,
        x: 0,
        y: 0,
        delay: .5,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto'
      });
  }

  hide(elem: Element): void {
    gsap.to(elem, { autoAlpha: 0, duration: .8 });
  }


}

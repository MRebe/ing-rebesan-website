import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';

class Section {
  imagePath: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {

  sections: Section[] = [
    {
      imagePath: 'assets/images/img_1.jpg',
      title: 'Costruisci il tuo sogno',
      description: 'Ogni persona ha il suo sogno, piccolo o grande che sia. ' +
        'Dalle prime fasi della progettazione fino alla sua realizzazione ci sarà sempre qualcuno ad accompagnarti.'
    },
    {
      imagePath: 'assets/images/img_2.jpg',
      title: 'Reali fin da subito',
      description: 'Non hai le idee chiare? ' +
        'Con i più sofisticati software di progettazione tridimensionale i tuoi pensieri prenderanno vita davanti ai tuoi occhi.'
    },
    {
      imagePath: 'assets/images/img_3.jpg',
      title: 'Il sostegno che cerchi',
      description: 'Progettare costruzioni in ferro non è mai stato così semplice e veloce. Dai il peso giusto ai tuoi progetti.'
    }
  ];

  timelines = [];
  scrollTriggers = [];

  constructor() { }

  ngOnInit(): void {
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

    gsap.utils.toArray('.ir-overlay').forEach((panel: Element) => {
      const trig = ScrollTrigger.create({
        trigger: panel,
        scroller: 'section',
        start: 'top top',
        pin: true,
        pinSpacing: false
      });

      this.scrollTriggers.push(trig);
    });

    gsap.utils.toArray('.ir-overlay-info').forEach((elem: Element) => {
      this.hide(elem);

      const trig = ScrollTrigger.create({
        trigger: elem,
        scroller: 'section',
        onEnter: () => { this.animateFrom(elem, 1) },
        onEnterBack: () => { this.animateFrom(elem, -1) },
        onLeave: () => { this.hide(elem) }
      });

      this.scrollTriggers.push(trig);
    });

    if (window.innerWidth > 600) {
      const tl = gsap.to('img.ir-overlay-logo-big',
        {
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: 'img.ir-overlay-logo-big',
            scroller: 'section',
            start: '-20px top',
            end: '+=400',
            pin: true,
            pinSpacing: false,
            scrub: true
          }
        });

      this.timelines.push(tl);
    }
  }

  animateFrom(elem: Element, direction: number): void {
    if (window.innerWidth > 600) {
      direction = direction | 1;

      var x = 0, y = 0;
      if (elem.classList.contains('ir-overlay-even')) {
        x = 200;
        y = 0;
      } else if (elem.classList.contains('ir-overlay-odd')) {
        x = -200;
        y = 0;
      }

      gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.5,
        x: 0,
        y: 0,
        delay: .5,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto'
      });
    } else {
      gsap.fromTo(elem, { autoAlpha: 0 }, {
        duration: 1.5,
        delay: .5,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto'
      });
    }
  }

  hide(elem: Element): void {
    gsap.to(elem, { autoAlpha: 0, duration: .8 });
  }


}


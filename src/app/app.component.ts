import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class Link {
  label: string;
  path: string;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  mobileMenuOpen = false;
  links: Link[] = [
    {
      label: 'Calcolo',
      path: 'Calcolo',
      isActive: false
    },
    {
      label: 'Progettazione',
      path: 'Progettazione',
      isActive: false
    },
    {
      label: 'Render',
      path: 'Render',
      isActive: false
    },
    {
      label: 'Collaborazioni',
      path: 'Collaborazioni',
      isActive: false
    },
    {
      label: 'Contatti',
      path: 'Contatti',
      isActive: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    if (window.innerWidth > 600) {
      tl.set('nav .ir-mobile-menu', { top: 0 });
      tl.to('nav ul li', { top: 0, delay: .2, stagger: .2, duration: .5 });
    } else {
      //tl.set('nav ul li', { top: 0 });
      tl.to('nav .ir-mobile-menu', { top: 0, delay: .2, stagger: .2, duration: .5 });
    }
    tl.to('nav .ir-nav-logo', { right: 20, delay: .2, duration: .5 }, '-=.5');
    tl.to('.ir-content', { opacity: 1, duration: 1 }, '-=1');
  }

  public redirectTo(link: Link): void {
    if (this.mobileMenuOpen) {
      this.toggleMenu();
    }
    
    this.links.forEach(e => e.isActive = false);
    if (link) {
      link.isActive = true;
      this.router.navigate([link.path]);
    } else {
      this.router.navigate(['']);
    }
  }

  public toggleMenu() {
    const nav = document.querySelector('.ir-desktop-nav') as HTMLElement;
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
      gsap.to('.ir-desktop-nav', {width: '0', duration:.5});
    } else {
      this.mobileMenuOpen = true;
      gsap.set('nav ul li', {opacity: 0});
      gsap.to('.ir-desktop-nav', {width: 'auto', delay: .3, duration:.3});
      gsap.fromTo('nav ul li', {left: '-150px'}, { left: 0, opacity: 1, delay: .2, stagger: .2, duration: .3 });
    }
  }

}

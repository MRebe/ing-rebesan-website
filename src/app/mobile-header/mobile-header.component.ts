import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Link } from './../header/header.links';
import * as menu from './../header/header.links';
@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  showMenu = false;
  isHome = true;
  links: Link[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.links = menu.links;
  }

  public redirectTo(link: Link): void {
    this.showMenu = false;
    this.isHome = false;
    this.links.forEach( e => e.isActive = false);
    if (link) {
      link.isActive = true;
      this.router.navigate(['m/' + link.path]);
    } else {
      this.isHome = true;
      this.router.navigate(['Home']);
    }
  }

}

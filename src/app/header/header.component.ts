import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Link } from './header.links';
import * as menu from './header.links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Link[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.links = menu.links;
  }

  public redirectTo(link: Link): void {
    this.links.forEach( e => e.isActive = false);
    if (link) {
      link.isActive = true;
      this.router.navigate([link.path]);
    } else {
      this.router.navigate(['Home']);
    }
  }

}

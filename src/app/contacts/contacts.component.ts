import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const from = {opacity: 0};
    const to = {opacity: 1, duration: .7, delay: .2};

    gsap.fromTo('.ir-contacts-title', from, to);
    gsap.fromTo('.ir-contacts-text', from, to);
    gsap.fromTo('.ir-contacts-name', from, to);
    gsap.fromTo('.ir-contacts-item-box', from, to);
    gsap.fromTo('.ir-additional-message', from, to);
    gsap.fromTo('.ir-contacts-footer', {bottom: '-100px'}, {bottom: 0, duration: .7, delay: .2});

  }

}

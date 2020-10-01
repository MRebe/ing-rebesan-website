import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContactsComponent } from './mobile-contacts.component';

describe('MobileContactsComponent', () => {
  let component: MobileContactsComponent;
  let fixture: ComponentFixture<MobileContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

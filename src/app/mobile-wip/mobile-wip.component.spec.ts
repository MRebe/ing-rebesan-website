import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileWipComponent } from './mobile-wip.component';

describe('MobileWipComponent', () => {
  let component: MobileWipComponent;
  let fixture: ComponentFixture<MobileWipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileWipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

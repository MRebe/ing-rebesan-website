import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCollaborationsComponent } from './mobile-collaborations.component';

describe('MobileCollaborationsComponent', () => {
  let component: MobileCollaborationsComponent;
  let fixture: ComponentFixture<MobileCollaborationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCollaborationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCollaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

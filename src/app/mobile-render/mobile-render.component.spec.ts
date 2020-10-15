import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRenderComponent } from './mobile-render.component';

describe('MobileRenderComponent', () => {
  let component: MobileRenderComponent;
  let fixture: ComponentFixture<MobileRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

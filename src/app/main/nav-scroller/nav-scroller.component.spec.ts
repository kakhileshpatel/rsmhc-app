import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavScrollerComponent } from './nav-scroller.component';

describe('NavScrollerComponent', () => {
  let component: NavScrollerComponent;
  let fixture: ComponentFixture<NavScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

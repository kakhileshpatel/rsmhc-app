import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturetteleftComponent } from './featuretteleft.component';

describe('FeaturetteleftComponent', () => {
  let component: FeaturetteleftComponent;
  let fixture: ComponentFixture<FeaturetteleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturetteleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturetteleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

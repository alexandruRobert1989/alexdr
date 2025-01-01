import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDocComponent } from './animation-doc.component';

describe('AnimationDocComponent', () => {
  let component: AnimationDocComponent;
  let fixture: ComponentFixture<AnimationDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

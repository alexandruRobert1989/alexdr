import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLottieComponent } from './custom-lottie.component';

describe('CustomLottieComponent', () => {
  let component: CustomLottieComponent;
  let fixture: ComponentFixture<CustomLottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLottieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

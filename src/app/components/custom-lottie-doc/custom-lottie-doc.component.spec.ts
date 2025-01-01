import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLottieDocComponent } from './custom-lottie-doc.component';

describe('CustomLottieDocComponent', () => {
  let component: CustomLottieDocComponent;
  let fixture: ComponentFixture<CustomLottieDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLottieDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLottieDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

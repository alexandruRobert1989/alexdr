import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGifComponent } from './custom-gif.component';

describe('CustomGifComponent', () => {
  let component: CustomGifComponent;
  let fixture: ComponentFixture<CustomGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomGifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGifDocComponent } from './custom-gif-doc.component';

describe('CustomGifDocComponent', () => {
  let component: CustomGifDocComponent;
  let fixture: ComponentFixture<CustomGifDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomGifDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomGifDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

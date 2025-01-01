import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideoDocComponent } from './custom-video-doc.component';

describe('CustomVideoDocComponent', () => {
  let component: CustomVideoDocComponent;
  let fixture: ComponentFixture<CustomVideoDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomVideoDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomVideoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

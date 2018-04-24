import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSideBarComponent } from './carousel-side-bar.component';

describe('CarouselSideBarComponent', () => {
  let component: CarouselSideBarComponent;
  let fixture: ComponentFixture<CarouselSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

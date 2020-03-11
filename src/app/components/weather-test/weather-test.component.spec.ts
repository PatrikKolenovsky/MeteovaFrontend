import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTestComponent } from './weather-test.component';

describe('WeatherTestComponent', () => {
  let component: WeatherTestComponent;
  let fixture: ComponentFixture<WeatherTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

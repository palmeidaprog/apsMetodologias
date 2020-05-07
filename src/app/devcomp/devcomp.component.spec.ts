import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcompComponent } from './devcomp.component';

describe('DevcompComponent', () => {
  let component: DevcompComponent;
  let fixture: ComponentFixture<DevcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

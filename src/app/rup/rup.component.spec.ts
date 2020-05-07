import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupComponent } from './rup.component';

describe('RupComponent', () => {
  let component: RupComponent;
  let fixture: ComponentFixture<RupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

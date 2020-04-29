import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascataComponent } from './cascata.component';

describe('CascataComponent', () => {
  let component: CascataComponent;
  let fixture: ComponentFixture<CascataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

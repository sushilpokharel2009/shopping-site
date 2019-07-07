import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsearchComponent } from './navsearch.component';

describe('NavsearchComponent', () => {
  let component: NavsearchComponent;
  let fixture: ComponentFixture<NavsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

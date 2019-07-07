import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersproductdetailsComponent } from './usersproductdetails.component';

describe('UsersproductdetailsComponent', () => {
  let component: UsersproductdetailsComponent;
  let fixture: ComponentFixture<UsersproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

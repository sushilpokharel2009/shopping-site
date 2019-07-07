import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersproductComponent } from './usersproduct.component';

describe('UsersproductComponent', () => {
  let component: UsersproductComponent;
  let fixture: ComponentFixture<UsersproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

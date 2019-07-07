import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersproductmainComponent } from './usersproductmain.component';

describe('UsersproductmainComponent', () => {
  let component: UsersproductmainComponent;
  let fixture: ComponentFixture<UsersproductmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersproductmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersproductmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

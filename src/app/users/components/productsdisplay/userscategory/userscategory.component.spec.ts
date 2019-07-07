import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscatergoryComponent } from './userscatergory.component';

describe('UserscatergoryComponent', () => {
  let component: UserscatergoryComponent;
  let fixture: ComponentFixture<UserscatergoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscatergoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

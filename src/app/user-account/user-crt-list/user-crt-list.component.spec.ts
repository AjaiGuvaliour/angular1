import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrtListComponent } from './user-crt-list.component';

describe('UserCrtListComponent', () => {
  let component: UserCrtListComponent;
  let fixture: ComponentFixture<UserCrtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCrtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCrtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

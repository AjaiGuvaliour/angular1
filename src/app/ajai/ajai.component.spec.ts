import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaiComponent } from './ajai.component';

describe('AjaiComponent', () => {
  let component: AjaiComponent;
  let fixture: ComponentFixture<AjaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

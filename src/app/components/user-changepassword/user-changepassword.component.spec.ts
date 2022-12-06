import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangepasswordComponent } from './user-changepassword.component';

describe('UserChangepasswordComponent', () => {
  let component: UserChangepasswordComponent;
  let fixture: ComponentFixture<UserChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChangepasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

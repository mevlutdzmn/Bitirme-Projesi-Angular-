import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAddImageComponent } from './request-add-image.component';

describe('RequestAddImageComponent', () => {
  let component: RequestAddImageComponent;
  let fixture: ComponentFixture<RequestAddImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAddImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAddImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

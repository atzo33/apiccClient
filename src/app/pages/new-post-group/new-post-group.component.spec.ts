import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostGroupComponent } from './new-post-group.component';

describe('NewPostGroupComponent', () => {
  let component: NewPostGroupComponent;
  let fixture: ComponentFixture<NewPostGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPostGroupComponent]
    });
    fixture = TestBed.createComponent(NewPostGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

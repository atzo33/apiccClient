import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPostComponent } from './group-post.component';

describe('GroupPostComponent', () => {
  let component: GroupPostComponent;
  let fixture: ComponentFixture<GroupPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupPostComponent]
    });
    fixture = TestBed.createComponent(GroupPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

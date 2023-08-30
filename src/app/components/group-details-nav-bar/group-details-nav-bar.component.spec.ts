import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsNavBarComponent } from './group-details-nav-bar.component';

describe('GroupDetailsNavBarComponent', () => {
  let component: GroupDetailsNavBarComponent;
  let fixture: ComponentFixture<GroupDetailsNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupDetailsNavBarComponent]
    });
    fixture = TestBed.createComponent(GroupDetailsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsNavBarComponent } from './groups-nav-bar.component';

describe('GroupsNavBarComponent', () => {
  let component: GroupsNavBarComponent;
  let fixture: ComponentFixture<GroupsNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsNavBarComponent]
    });
    fixture = TestBed.createComponent(GroupsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

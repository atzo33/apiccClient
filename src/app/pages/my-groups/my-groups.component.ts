import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Group from 'src/app/model/group';
import User from 'src/app/model/user';
import { GroupService } from 'src/app/services/group/group.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent {

  
  loggedUser!: User;
  userId!: number;
  editingMode = false;
  selectedGroup: any;

 

  

  

  groups!: Observable<Group[]>;

  constructor(private groupService: GroupService,private route: ActivatedRoute,private userService:UserService) {

  }

  ngOnInit(): void {
    this.loggedUser = this.userService.getUser() as User;
    this.userId=this.loggedUser.id;

    this.loadGroups();
    

    
    
  }

  private loadGroups() {

    
    this.groups = this.groupService.getAllGroupsByUser(this.userId);
    console.log(this.userId);
    console.log(this.groups);
    
  }

}

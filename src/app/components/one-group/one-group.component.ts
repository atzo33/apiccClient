import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Group from 'src/app/model/group';
import { GroupAdmin } from 'src/app/model/groupAdmin';
import { GroupRequest } from 'src/app/model/groupRequest';
import User from 'src/app/model/user';
import { GroupService } from 'src/app/services/group/group.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-one-group',
  templateUrl: './one-group.component.html',
  styleUrls: ['./one-group.component.css']
})
export class OneGroupComponent {
  
  loggedUser!: User;
  userId!: number;
  editingMode = false;
  selectedGroup: any;

  groupAdmins: GroupAdmin[] | undefined;
  groupMembers!: GroupRequest[];

  isUserInGroup: boolean = false;
  isUserAdminOfGroup: boolean = false;

  

  groups!: Observable<Group[]>;

  constructor(private groupService: GroupService,private route: ActivatedRoute,private userService:UserService) {

  }

  ngOnInit(): void {
    this.loggedUser = this.userService.getUser() as User;
    this.userId=this.loggedUser.id;

    this.loadGroups();
    

    
    
  }

  private loadGroups() {

    
    this.groups = this.groupService.getAllGroups();
    console.log(this.userId);
    console.log(this.groups);
    
  }

  delete(id:number){

    this.groupService.deleteGroup(id);
    console.log(this.userId)
  }

  editGroup(group: any) {
    this.editingMode = true;
    this.selectedGroup = { ...group };
    
    
  }
  
  cancelEdit() {
    this.editingMode=false
    
  }
  
  updateGroup(group: any) {

    
    const name=group.name;
    console.log(name)
    const id=group.id;
    console.log(id)
    const description=group.description
    console.log(description)
    

    this.groupService.updateGroup(id,name,description);
    this.editingMode=false
    window.location.reload();
    
  }

  joinGroup(id:number){
    this.groupService.joinGroup(id);
    window.location.reload();

  }

  

}

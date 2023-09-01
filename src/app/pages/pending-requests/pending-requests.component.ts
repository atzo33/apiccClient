import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupAdmin } from 'src/app/model/groupAdmin';
import { GroupRequest } from 'src/app/model/groupRequest';
import User from 'src/app/model/user';
import { GroupService } from 'src/app/services/group/group.service';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent {

  groupPendingRequests!: GroupRequest[];
  groupID: number | undefined;
  userID!: number;
  isUserAdminOfGroup: boolean = false;
  loggedUser!: User | null;
  groupAdmins: GroupAdmin[] | undefined;
  requestFrom!:User
   

  constructor(
    private route: ActivatedRoute,
    
    private userService: UserService,
    private groupService: GroupService,
    
    private postService: PostService,
    
  ) {}

  ngOnInit(){
    this.getGroupID();
    this.getAllGroupAdmins();
    this.getAllPendingRequests();
  }


  getGroupID() {
    this.route.paramMap.subscribe((params) => {
      this.groupID = Number(params.get('id'));
    });
  }

  getAllGroupAdmins() {
    this.groupService
      .getAllAdminsForGroup(this.groupID as number)

      .subscribe((data) => {

        this.groupAdmins = data;

        data.forEach((admin) => {
          if (admin.user.id == this.loggedUser?.id) {
            this.isUserAdminOfGroup = true;
          }
        });
      });
  }

  getAllPendingRequests() {
    this.groupService
      .getAllPendingMembersInGroup(this.groupID as number)
      .subscribe((data) => {
        this.groupPendingRequests = data;
        
        console.log(this.groupPendingRequests)
      });
  }

  approve(id:number){
    console.log(id)
    this.groupService.approveGroupJoin(id).subscribe({
      next:(res)=>{
        console.log(res);
      }
    });
    window.location.reload();
  }

  delete(id:number){
    this.groupService.rejectGroupJoin(id).subscribe({
      next:(res)=>{
        console.log(res);
      }
    });
    window.location.reload();
  }

}


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Group from 'src/app/model/group';
import { GroupAdmin } from 'src/app/model/groupAdmin';
import { GroupRequest } from 'src/app/model/groupRequest';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { GroupService } from 'src/app/services/group/group.service';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent {

  groupID: number | undefined;
  groupAdmins: GroupAdmin[] | undefined;
  groupMembers!: GroupRequest[];
  groupPendingRequests!: GroupRequest[];
  
  groupPosts!: Post[];
  userID!: number;


  loggedUser!: User | null;
  isUserAdminOfGroup: boolean = false;
  group!: Group;
  isUserInGroup: boolean = false;


  constructor(
    private route: ActivatedRoute,
    
    private userService: UserService,
    private groupService: GroupService,
    
    private postService: PostService,
    
  ) {}

  ngOnInit(){

    this.loggedUser = this.userService.getUser() as User;
    this.userID=this.loggedUser.id;
    this.getGroupID();
    this.getAllPosts();
    this.getGroupData();
    this.getAllGroupAdmins();
    this.getAllPendingRequests();
    




  }

  getGroupID() {
    this.route.paramMap.subscribe((params) => {
      this.groupID = Number(params.get('id'));
    });
  }

  getAllPosts() {
    this.postService
      .getAllPostsForGroup(this.groupID as number)
      .subscribe((data) => {
        this.groupPosts = data;
      });
  }

  getGroupData() {
    this.groupService.getOne(this.groupID as number).subscribe((data) => {
      this.group = data;
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
      });
  }

}

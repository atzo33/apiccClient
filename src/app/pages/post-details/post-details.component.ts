import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import User from 'src/app/model/user';
import Comment from 'src/app/model/Comment';

import { CommentService } from 'src/app/services/commentService/comment.service';
import { GroupService } from 'src/app/services/group/group.service';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  

  postID: number | undefined;
 

  editingMode = false;
  selectedComment: any;
  
  postComments!:Comment[];
  userID!: number;


  loggedUser!: User | null;
  comment!: Comment;
  
 
  


  constructor(
    private route: ActivatedRoute,
    
    private userService: UserService,
    private groupService: GroupService,
    
    private postService: PostService,
    private commentService:CommentService
    
  ) {}

  ngOnInit(){

    this.loggedUser = this.userService.getUser() as User;
    this.userID=this.loggedUser.id;
    this.getPostID();
    this.getCommentsForPost();
    




  }

  getPostID() {
    this.route.paramMap.subscribe((params) => {
      this.postID = Number(params.get('id'));
    });
  }

  getCommentsForPost(){

    this.commentService
      .getAllCommentsForPost(this.postID as number)
      .subscribe((data) => {
        this.postComments = data;
      });

  }

  
  

  
  

  


  


  

  delete(id:number){

    this.commentService.deleteComment(id);
    
  }

  editComment(comment: any) {
    this.editingMode = true;
    this.selectedComment = { ...comment };
    
    
  }
  
  cancelEdit() {
    this.editingMode=false
    
  }
  
  updateComment(comment: any) {

    
    const text=comment.text;
    const id=comment.id
    
    
    
    

    this.commentService.updateComment(id,text);
    this.editingMode=false
    window.location.reload();
    
  }

  

}

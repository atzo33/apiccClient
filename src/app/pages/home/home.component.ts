import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loggedUser!: User;
  userId!: number;
  editingMode = false;
  selectedPost: any;
  isMyPost=false;
  postId!:number;
  groupId!:number;

  posts!: Observable<Post[]>;// Replace 'any' with the actual type of your posts
  

  constructor(private postService: PostService,private route: ActivatedRoute,private userService:UserService) {}

  ngOnInit(): void {
    this.loggedUser = this.userService.getUser() as User;
    this.userId=this.loggedUser.id;
    this.loadPosts();
    
    
  }

  private loadPosts() {
    this.posts=this.postService.getAll();
    
    console.log(this.userId);
    
    
  }

  delete(id:number){

    this.postService.deletePost(id);
    console.log(this.userId)
  }

  editPost(post: any) {
    this.editingMode = true;
    this.selectedPost = { ...post };
    
    
  }
  
  cancelEdit() {
    this.editingMode=false
    
  }
  
  updatePost(post: any) {

    const id=post.id
    const content=post.content

    this.postService.updatePost(id,content);
    this.editingMode=false
    window.location.reload();
    
  }



}

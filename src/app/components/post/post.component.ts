import { UserService } from 'src/app/services/user/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  loggedUser!: User;
  userId!: number;

  posts!: Observable<Post[]>;// Replace 'any' with the actual type of your posts
  

  constructor(private postService: PostService,private route: ActivatedRoute,private userService:UserService) {}

  ngOnInit(): void {
    this.loggedUser = this.userService.getUser() as User;
    this.userId=this.loggedUser.id;
    this.loadPosts();
  }

  private loadPosts() {
    this.posts = this.postService.getAllPostsByUser(this.userId);
    console.log(this.userId)
  }

}

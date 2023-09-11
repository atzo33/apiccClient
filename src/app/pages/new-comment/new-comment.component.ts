import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { CommentService } from 'src/app/services/commentService/comment.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {
  
  
  
  createPostForm: FormGroup;
  postID: number | undefined;
  post!: Post;
  
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private commentService:CommentService
  ) {
    this.createPostForm = this.formBuilder.group({
      text: ['', [Validators.required]]
      
    });
  }

  ngOnInit(){
    this.getPostID();
    
  }

  getPostID() {
    this.route.paramMap.subscribe((params) => {
      this.postID = Number(params.get('id'));
    });
  }

  

  onSubmit(){
    const text=this.createPostForm.get("text");
    
    this.commentService.newComment(
      text?.value,
      this.postID as number
    );

  }

  

}

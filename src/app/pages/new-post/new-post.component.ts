import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  
  createPostForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.createPostForm = this.formBuilder.group({
      content: ['', [Validators.required]]
      
    });
  }

  

  onSubmit(){
    const content=this.createPostForm.get("content");
    this.postService.newPost(
      content?.value
    );

  }

}

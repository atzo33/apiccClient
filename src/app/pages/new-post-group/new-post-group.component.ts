import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Group from 'src/app/model/group';
import { GroupService } from 'src/app/services/group/group.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-new-post-group',
  templateUrl: './new-post-group.component.html',
  styleUrls: ['./new-post-group.component.css']
})
export class NewPostGroupComponent {
  
  
  createPostForm: FormGroup;
  groupID: number | undefined;
  group!: Group;
  
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private groupService:GroupService
  ) {
    this.createPostForm = this.formBuilder.group({
      content: ['', [Validators.required]]
      
    });
  }

  ngOnInit(){
    this.getGroupID();
    this.getGroupData();
  }

  getGroupID() {
    this.route.paramMap.subscribe((params) => {
      this.groupID = Number(params.get('id'));
    });
  }

  

  onSubmit(){
    const content=this.createPostForm.get("content");
    const id=this.groupID as number
    this.postService.newPostForGroup(
      content?.value,
      id
    );

  }

  getGroupData() {
    this.groupService.getOne(this.groupID as number).subscribe((data) => {
      this.group = data;
    });
  }

}

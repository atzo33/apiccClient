import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from 'src/app/services/group/group.service';


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {

  createGroupForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private groupService: GroupService){

      this.createGroupForm = this.formBuilder.group({
        groupName: ['', [Validators.required]],
        groupDescription: ['', [Validators.required]],

        
      });
    }


  createGroup(){

    const groupName=this.createGroupForm.get('groupName');
    const groupDescription=this.createGroupForm.get('groupDescription')
    console.log(groupName)
    console.log(groupDescription)
    this.groupService.newGroup(
      groupName?.value,
      groupDescription?.value
    );


  }

}

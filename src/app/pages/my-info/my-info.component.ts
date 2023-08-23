import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent {
  user!: User;
  userId!: number;
  localStorageService: any;
  
  editedUser: any; // A copy of the user object for editing
  editingMode = false;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ){};

  ngOnInit() {
    
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'));
    });
    this.user = this.userService.getUser() as User;
    console.log(this.user);
    
  }

  startEdit() {
    this.editedUser = { ...this.user };
    this.editingMode = true;
  }

  saveProfile(editedUser:User) {
    // console.log(editedUser)
    this.userService.updateUser(editedUser);
    this.editingMode=false
    window.location.reload();
    
   
  }

  cancelEdit() {
    this.editingMode = false;
    
  }
  changePassword(){
    this.router.navigate(['change-password']);
    
  }
}

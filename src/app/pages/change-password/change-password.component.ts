import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  user!: User;
  userId!: number;
  localStorageService: any;
  
  newPassword: string = '';
  oldPassword:string=''
  confirmPassword:string=''

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

  



  changePassword(oldPw:string,newPw:string,repeatPw:string){
    console.log(oldPw)
    console.log(newPw)
    console.log(repeatPw)
    console.log(this.user.password)
    


    if(newPw==repeatPw && oldPw==this.user.password){
      console.log("uslo")
      this.userService.updatePassword(newPw,this.user.id);
    }
    
  }

}

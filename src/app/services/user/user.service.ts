import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import User from 'src/app/model/user';
import { Observable, map } from 'rxjs';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL: string = 'http://localhost:8080/api/users';
  currentUser : any;
  

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    
    private router: Router,
    
  ) {}

  public collectUserDetailsAfterLogin(): void {
    this.http
      .get<User>(`${this.baseURL}/whoami`, {
        headers: {
          Authorization: `Bearer ${this.localStorage.getItem('token')}`,
        },
      })
      .subscribe({
        next: (res) => {
          this.localStorage.setItem('user', JSON.stringify(res));
        },
      });
  }

  whoAmI(): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/whoami`,{
       headers:{
         Authorization: `${this.localStorage.getItem("jwt")}`
       }
     }).pipe(map(user =>{
       this.currentUser = user;
       return user;
     }))
    }

  public getUser(): User | null {
    let savedLocally = this.localStorage.getItem('user');
    if (savedLocally == null) {
      return null;
    }

    return JSON.parse(savedLocally) as User;
  }

  updateUser(user:User){

    console.log(user)
    let username=user.username
    let email=user.email
    let firstName=user.firstName
    let lastName=user.lastName

    

    this.http.put<any>(
      `${this.baseURL}/${user.id}`,
      
      {
         username,
         email,
         firstName,
         lastName
      }
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    })
    // this.router.navigate(['profile']);
  }

  updatePassword(newPassword:string,oldPassword:string,id:number){

    this.http.put<any>(
      `${this.baseURL}/password-change`,
      
      {
         newPassword,
         oldPassword,
         id
      }
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.localStorage.clear;
    this.router.navigate(['']);
    

   
    
    

  }
}

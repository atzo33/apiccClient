import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL: string = 'http://localhost:8080/api/users';
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router,
    private userService: UserService
  ) {}

  public login(username: string, password: string): void {
    this.http
      .post<any>(
        `${this.baseURL}/login`,
        { username, password },
        { headers: this.headers }
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.localStorageService.setItem('token', response.token);

          this.userService.collectUserDetailsAfterLogin();
          setTimeout(() => {
            this.router.navigate(['home']);
          }, 1000);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  public register(username: string, password: string, email: string, firstName: string, lastName: string): void {
    this.http.post<any>(
      `${this.baseURL}/register`,
      {
        username,
        password,
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
    this.router.navigate(['']);
  }

  logout(): void {
    
    localStorage.clear();
    
  }
  
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL: string = 'http://localhost:8080/api/posts';
  private postsChanged = new Subject<void>();

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private router: Router,
  ) {}

  private constructHttpHeaders(): HttpHeaders {
    const token = this.localStorageService.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  public newPost(content: string): void {
    this.http.post<any>(
      `${this.baseURL}/add`,
      {
        content
      }
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.router.navigate(['profile']);
  }

  getAllPostsByUser(id: number): Observable<Post[]> {
    const url = `${this.baseURL}/user/${id}`;
    console.log(url);

    return this.http.get<Post[]>(url);
  }

  
}

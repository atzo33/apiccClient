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
        window.location.reload();
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

  deletePost(id: number): void {

    const url = `${this.baseURL}/${id}`;
    this.http.delete<Post>(url,{
      headers: {
        Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
      }}).subscribe({
      next: () => {
        console.log('Post deleted successfully.');
        // You can navigate to a different route or refresh the posts list here
        this.router.navigate(['home']);
      },
      error: error => {
        console.error('Error deleting post:', error);
      }
    });;
    window.location.reload();

  }

  updatePost(id:number, content:string){

    
    console.log(content)
    console.log(id)

    this.http.put<any>(
      `${this.baseURL}/${id}`,
      
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




  
}

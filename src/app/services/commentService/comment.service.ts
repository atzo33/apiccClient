import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Comment from 'src/app/model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL: string = 'http://localhost:8080/api/comments';

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private router: Router,
  
  ) { }

  private constructHttpHeaders(): HttpHeaders {
    const token = this.localStorageService.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  public newComment(text: string,postId:number): void {
    this.http.post<any>(
      `${this.baseURL}`,
      {
        text,
        postId
        
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
    this.router.navigate(['posts/',postId]);
    
  }

  public getAllCommentsForPost(postID: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseURL}/post/${postID}`);
  }


  deleteComment(id: number): void {

    const url = `${this.baseURL}/${id}`;
    this.http.delete<Comment>(url,{
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

  updateComment(id:number, text:string){

    
   

    this.http.put<any>(
      `${this.baseURL}/${id}`,
      
      {
        text  
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

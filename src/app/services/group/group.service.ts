import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import Group from 'src/app/model/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseURL: string = 'http://localhost:8080/api/groups';
  

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService) { }

  private constructHttpHeaders(): HttpHeaders {
    const token = this.localStorageService.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  public newGroup(name: string,description:string): void {
    this.http.post<any>(
      `${this.baseURL}`,
      
      {
        name,
        description
      },
      {
        headers: {
          Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
        },
        
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
    this.router.navigate(['groups']);
    
  }

  getAllGroups(): Observable<Group[]> {
    const url = `${this.baseURL}`;
    console.log(url);

    return this.http.get<Group[]>(url);
  }

  deleteGroup(id: number): void {

    const url = `${this.baseURL}/${id}`;
    this.http.delete<Group>(url,{
      headers: {
        Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
      }}).subscribe({
      next: () => {
        console.log('Group deleted successfully.');
        // You can navigate to a different route or refresh the posts list here
        this.router.navigate(['groups']);
      },
      error: error => {
        console.error('Error deleting post:', error);
      }
    });;
    window.location.reload();

  }

  updateGroup(id:number, name:string,description:string){

    
    

    this.http.put<any>(
      `${this.baseURL}/${id}`,
      
      {
        id,
        name,
        description 
      }
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.router.navigate(['groups']);
    




  }


  joinGroup(id:number){

    
    

    this.http.post<any>(
      `${this.baseURL}/join/${id}`,
      
      {
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
    this.router.navigate(['groups']);
    




  }



  

    

 
    



}

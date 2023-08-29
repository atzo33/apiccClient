import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EReactionType } from 'src/app/model/EReactionType';
import Reaction from 'src/app/model/reaction';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {

  private baseUrl = 'http://localhost:8080/api/reactions'
  constructor(private http: HttpClient) { }

  createReaction(type:String, postIdReactedTo?: number | null, commentIdReactedTo?: number | null): Observable<Reaction> {
    return this.http.post<Reaction>(this.baseUrl, {type,postIdReactedTo,commentIdReactedTo});
    
  }

  deleteReaction(id:number | undefined):Observable<Reaction>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Reaction>(url);
  }

  updateReaction(id:number,type:string){

    const url = `${this.baseUrl}/${id}`;
  
    return this.http.put<Reaction>(url,{type});
  }

  
  findAllByPost(postId: number): Observable<Reaction[]>{

    const url = `${this.baseUrl}/post/${postId}`;

    return this.http.get<Reaction[]>(url);
  }


  findAllByComment(commentId: number): Observable<Reaction[]>{
    const url = `${this.baseUrl}/comments/${commentId}`;
    return this.http.get<Reaction[]>(url);
  }

  

  



  

  




  
}


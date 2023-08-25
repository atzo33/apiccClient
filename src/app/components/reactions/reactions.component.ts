import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { EReactionType } from 'src/app/model/EReactionType';
import Reaction from 'src/app/model/reaction';
import { ReactionExistance } from 'src/app/model/reactionExistence';
import User from 'src/app/model/user';
import { ReactionsService } from 'src/app/services/reactions/reactions.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  @Input() postId!: number;
  @Input()commentId !: number;
  isLikeClicked: boolean = false;
  isDislikeClicked: boolean = false;
  isHeartClicked: boolean = false;
  reactions: Reaction[] = []
  user !: User
  reactionId: number | undefined
  likeReactionId:number|undefined
  dislikeReactionId:number|undefined
  heartReactionId:number|undefined
  

  constructor(private reactionService: ReactionsService,private userService: UserService){}

  ngOnInit(){
    this.getReactions();
  }

  
  


  getReactions(){
    this.userService.whoAmI().subscribe(data =>{
      this.user = data;
      console.log(this.user.id)
      console.log(this.postId)
     })
    if(this.postId){
      this.reactionService.findAllByPost(this.postId).subscribe(data => {
        
        
        this.reactions = data;
        console.log(this.reactions)
        this.reactions.forEach(reaction =>{
          console.log("Tip pokupljene rakcije")
          console.log(reaction.type);
          
          if(reaction.reactedBy.id == this.user.id ){
            
    
            if(reaction.type == 'LIKE'){
              this.isLikeClicked = true;
              this.likeReactionId=reaction.id
            }
            if(reaction.type == 'DISLIKE'){
              this.isDislikeClicked = true;
              this.dislikeReactionId=reaction.id
            }
            if(reaction.type == 'HEART'){
              this.isHeartClicked = true;
              this.heartReactionId=reaction.id
            }
            this.reactionId = reaction.id;

            console.log(this.reactionId)
          }
          
        })
      });
    }
    if(this.commentId){
      this.reactionService.findAllByComment(this.commentId).subscribe(data =>{
        this.reactions = data;
      })
    }
  }

  like(){

    
    if(this.isLikeClicked){
     console.log(this.likeReactionId);
         
     this.reactionService.deleteReaction(this.likeReactionId).subscribe({next(value) {
       console.log(value);
       window.location.reload();
     },
   error(err) {
     console.log(err);
   },})
    }
    else{
     this.reactionService.createReaction("LIKE",this.postId,this.commentId).subscribe({
       next(value) {
         console.log(value);         
       },
       error(err) {
         console.log(err);         
       }
     });
     this.isLikeClicked = !this.isLikeClicked;
     window.location.reload();
    }
  }


 dislike(){
  if(this.isDislikeClicked){
  console.log(this.dislikeReactionId);
  
  this.reactionService.deleteReaction(this.dislikeReactionId).subscribe({next(value) {
    console.log(value);
    window.location.reload();
    
  },
error(err) {
  console.log(err);
},})
 }
  else{
    this.reactionService.createReaction("DISLIKE",this.postId,this.commentId).subscribe({
      next(value) {
        console.log(value);
        
      },
      error(err) {
        console.log(err);         
      }
    });
    this.isDislikeClicked = !this.isDislikeClicked;
    window.location.reload();
    }
  }

  
  
  



  heart(){
    if(this.isHeartClicked){
      console.log(this.heartReactionId);
      
      this.reactionService.deleteReaction(this.heartReactionId).subscribe({next(value) {
        console.log(value);
        window.location.reload();
        
      },
    error(err) {
      console.log(err);
    },})
     }
     else{
      this.reactionService.createReaction("HEART",this.postId,this.commentId).subscribe({
        next(value) {
          console.log(value);
          
        },
        error(err) {
          console.log(err);         
        }
      });
      this.isHeartClicked = !this.isHeartClicked;
      window.location.reload();
    }
  
    
  }

}

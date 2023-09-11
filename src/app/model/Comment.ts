import User from "./user";

export default interface Comments {
    id: number;
    createdAt: string;
    postedBy: User;
    text: string;
    postId: number;
    parentCommentID: number;
    
  }
import User from "./user"

export interface Post {
    id: number

    content:String

    user: User

    images : string[]

    totalComments: number 

    comments: Comment

    groupId:number 

    creationDate: String 

    editing: boolean; 

}
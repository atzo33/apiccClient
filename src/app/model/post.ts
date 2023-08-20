import User from "./user"

export interface Post {
    id: number

    content:String

    user: User

    images : string[]

    totalComments: number 

    comments: Comment

    postedIn:number 

    creationDate: String 

}
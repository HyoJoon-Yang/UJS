 export interface Owner {
    avator: any,
    name: string,
    nickname: string,
    email: string
  }
  
  export interface PostList {
    pk: number;
    kind: string;
    title: string;
    contents: string;
    
    owner: Owner;
    created_at: string;
    updated_at: string;
  }

 export interface PostDetail {
    pk: number;
    kind: string;
    title: string;
    contents: string;
    owner: Owner;
    image:string;
    created_at: string;
    updated_at: string;
  }


  
  export interface Post {
    pk: number;
    created_at: string;
    updated_at: string;
  }
  export interface Comment {
    owner: Owner;
    post: string;
    contents: string;
 } 
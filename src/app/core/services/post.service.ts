import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { Observable, catchError, of, retry } from 'rxjs';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPosts = (): Observable<Post[]> => {
    return this.http
      .get<Post[]>(POSTS_URL)
      .pipe(retry(3), catchError(this.handleError<Post[]>('getPosts')));
  };

  public getPostById = (postId: number): Observable<Post> => {
    return this.http
      .get<Post>(`${POSTS_URL}/${postId}`)
      .pipe(retry(3), catchError(this.handleError<Post>('getPostById')));
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}

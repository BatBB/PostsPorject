import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent implements OnInit, OnDestroy {
  public posts: Post[] = [];

  private subscription: Subscription | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts = () => {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  };

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

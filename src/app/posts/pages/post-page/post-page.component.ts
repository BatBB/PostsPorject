import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  public post: Post | null = null;

  private postId: number | null = null;

  private subscription: Subscription | null = null;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPostById();
  }

  private getPostById = () => {
    this.route.params.subscribe((params) => (this.postId = params['id']));

    if (this.postId !== null) {
      this.postService.getPostById(this.postId).subscribe((post) => (this.post = post));
    }
  };

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

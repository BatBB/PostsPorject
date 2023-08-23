import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SharedModule } from '../shared/shared.module';
import { PostPageComponent } from './pages/post-page/post-page.component';

@NgModule({
  declarations: [PostsPageComponent, PostCardComponent, PostPageComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
})
export class PostsModule {}

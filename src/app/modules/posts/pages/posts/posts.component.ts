import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(
    private postsService: PostsService,
    private toaster: MessageService
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  filter(event: string) {
    if (event.trim()) {
      this.posts = this.posts.filter((post) =>
        post.type.toLowerCase().includes(event.toLowerCase())
      );
    } else if (event === '') {
      // get posts when clear the search
      this.onClearSearch();
    }
  }

  onClearSearch() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAllPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
    });
  }

  showSuccessHideToaster() {
    this.toaster.add({
      severity: 'info',
      summary: 'Post Hidden Successfully',
    });
  }

  onHidePost(targetPost: Post) {
    this.postsService.hidePostByID(targetPost);
    this.showSuccessHideToaster();
  }
}

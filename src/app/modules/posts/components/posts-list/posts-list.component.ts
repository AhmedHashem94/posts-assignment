import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
  @Output() onHide = new EventEmitter();
  @Input() posts!: Post[];

  onHidePost(post: Post) {
    this.onHide.emit(post);
  }
}

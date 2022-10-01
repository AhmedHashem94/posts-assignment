import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post!: Post;

  @Output() onHide = new EventEmitter();

  onHidePost() {
    this.onHide.emit();
  }
}

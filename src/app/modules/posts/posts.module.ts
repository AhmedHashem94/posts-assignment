import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';

import {
  AddPostComponent,
  PostsListComponent,
  PostComponent,
  PostsFilterComponent,
} from './components';
import { PostsComponent } from './pages';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [PostsRoutingModule, ReactiveFormsModule, CommonModule],
  declarations: [
    PostsComponent,
    PostsListComponent,
    AddPostComponent,
    PostComponent,
    PostsFilterComponent,
  ],
})
export class PostsModule {}

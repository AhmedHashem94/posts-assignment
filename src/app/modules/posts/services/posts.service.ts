import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eum minus adipisci quaerat, nostrum aperiam non ad id, aliquam commodi ratione nam similique quis sed voluptatem sint exercitationem doloribus praesentium?',
      title: 'Title test 1',
      location: 'Location test 1',
      type: 'Type 1',
    },
    {
      id: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eum minus adipisci quaerat, nostrum aperiam non ad id, aliquam commodi ratione nam similique quis sed voluptatem sint exercitationem doloribus praesentium?',
      title: 'Title test 2',
      location: 'Location test 2',
      type: 'Type 2',
    },
    {
      id: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eum minus adipisci quaerat, nostrum aperiam non ad id, aliquam commodi ratione nam similique quis sed voluptatem sint exercitationem doloribus praesentium?',
      title: 'Title test 3',
      location: 'Location test 3',
      type: 'Type 3',
    },
    {
      id: 4,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eum minus adipisci quaerat, nostrum aperiam non ad id, aliquam commodi ratione nam similique quis sed voluptatem sint exercitationem doloribus praesentium?',
      title: 'Title test 4',
      location: 'Location test 4',
      type: 'Type 4',
    },
    {
      id: 5,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eum minus adipisci quaerat, nostrum aperiam non ad id, aliquam commodi ratione nam similique quis sed voluptatem sint exercitationem doloribus praesentium?',
      title: 'Title test 5',
      location: 'Location test 5',
      type: 'Type 5',
    },
    {
      id: 6,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eum minus adipisci quaerat, nostrum aperiam non ad id, aliquam commodi ratione nam similique quis sed voluptatem sint exercitationem doloribus praesentium?',
      title: 'Title test 6',
      location: 'Location test 6',
      type: 'Type 6',
    },
    {
      id: 7,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eum minus adipisci quaerat, nostrum aperiam non ad id, aliquam commodi ratione nam similique quis sed voluptatem sint exercitationem doloribus praesentium?',
      title: 'Title test 7',
      location: 'Location test 7',
      type: 'Type 7',
    },
  ];

  private postsStream = new BehaviorSubject([...this.posts]);

  constructor(private http: HttpClient) {}

  getPostTypes() {
    const types = this.posts.map((post) => post.type);
    return of(types);
  }

  getAllPosts() {
    // API not working so i will staticly mocking the API
    // return this.http.get('');
    return this.postsStream;
  }

  addPost(post: Post) {
    // API not working so i will staticly mocking the API
    // return this.http.post('', post);
    post.id = this.posts.length + 1;
    this.posts.push(post);
    this.postsStream.next([...this.posts]);
  }

  hidePostByID(targetPost: Post) {
    const index = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts.splice(index, 1);
    this.postsStream.next(this.posts);
  }
}

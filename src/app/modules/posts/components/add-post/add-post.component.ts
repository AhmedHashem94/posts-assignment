import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from './../../services/posts.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  selectDefaultValue = 'Select Type';
  addForm!: FormGroup;
  types!: string[];

  constructor(
    private postsService: PostsService,
    private toaster: MessageService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getTypes();
  }

  initForm() {
    this.addForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('', Validators.required),
      location: new FormControl(''),
      type: new FormControl('Select Type', Validators.required),
    });
  }

  getTypes() {
    return this.postsService.getPostTypes().subscribe({
      next: (types: string[]) => {
        this.types = types;
      },
    });
  }

  resetForm() {
    this.addForm.reset();
    this.type.setValue(this.selectDefaultValue);
  }

  showSuccessAddToaster() {
    this.toaster.add({
      severity: 'success',
      summary: 'Post Added Successfully',
    });
  }

  onSubmit() {
    const formInvalid = this.addForm.invalid;
    const noTypeSelected = this.type.value === this.selectDefaultValue;

    if (formInvalid && noTypeSelected) {
      this.addForm.markAllAsTouched();
      return;
    }

    const post = { ...this.addForm.value };
    this.postsService.addPost(post);
    this.resetForm();
  }

  get description() {
    return this.addForm.get('description') as FormControl;
  }

  get type() {
    return this.addForm.get('type') as FormControl;
  }
}

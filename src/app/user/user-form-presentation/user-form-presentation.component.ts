import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss']
})
export class UserFormPresentationComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: '',
      lastName: ''
    });
  }

  ngOnInit() {}

  populateFields(user: User) {
    this.form.patchValue(user);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-user-table-presentation',
  templateUrl: './user-table-presentation.component.html',
  styleUrls: ['./user-table-presentation.component.scss']
})
export class UserTablePresentationComponent implements OnInit {
  @Input() users: Array<User>;
  constructor() {}

  ngOnInit() {}

}

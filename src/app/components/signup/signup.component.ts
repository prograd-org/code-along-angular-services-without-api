import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
// this statement is for creating form group
  registerForm = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  userName: new FormControl(),
  password: new FormControl(),
  email: new FormControl(),
  mobile: new FormControl(),
  });

  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    console.log(this.userService.getUser());

  }
// Getting form values and showing the output in console
  onSubmit() {
    const newUser: User = this.registerForm.value;
    this.userService.addUser(newUser);
  }


}

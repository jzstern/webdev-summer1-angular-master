import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    if (password === password2) {
      this.service
        .createUser(username, password)
        .then((res) => {
          if (res.status === 404) {
            alert('Username is already taken');
          } else {
            this.router.navigate(['profile']);
          }
      });
    } else {
      alert("Passwords must match");
    }
  }

  ngOnInit() {
  }

}

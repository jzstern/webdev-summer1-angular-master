import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  sections = [];
  isAdmin = false;

  update(user) {
    console.log(user);
    this.service
      .updateUser(user)
      .then(() =>
        alert("User updated successfully"));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.user = user;
        if (user.username === 'admin') {
          this.isAdmin = true;
          console.log(this.isAdmin);
        }
      })

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections);
  }

}

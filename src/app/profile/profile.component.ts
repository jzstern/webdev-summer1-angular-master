import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
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

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.user = user;
        if (user !== undefined) {
          if (user.username === 'admin') {
            this.isAdmin = true;
            console.log(this.isAdmin);
          }
        } else {
          console.log('REROUTE');
          this.router.navigate(['login']);
        }
      })

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections);
  }

  update(user) {
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

  unenroll(enrollmentId) {
    this.sectionService.unenrollStudentInSection(enrollmentId)
      .then(() => {
        alert('You have successfully un-enrolled from this course');
        this.sectionService
          .findSectionsForStudent()
          .then(sections => this.sections = sections);
      });
  }
}

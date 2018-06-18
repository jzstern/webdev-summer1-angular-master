import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private CourseService: CourseServiceClient,
              private router: Router) { }

  section = {
    name: 'Section 1',
    seats: 0
  };
  sections = [];
  courses = [];
  currentCourseId = 0;
  currentCourseName = '';

  ngOnInit() {
    this.CourseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  createSection() {
    this.sectionService
      .createSection(this.currentCourseId, this.section.name, this.section.seats)
      .then(() => {});
  }

  updateSection(section) {
    this.sectionService
      .updateSection(section)
      .then(() =>
        alert("Section updated successfully"));
  }

  deleteSection(sectionId) {
    this.sectionService
      .deleteSection(sectionId)
      .then(() => {
        this.sectionService
          .findSectionsForCourse(this.currentCourseId)
          .then(sections => {
            this.sections = sections;
            this.section.name = this.currentCourseName + ' Section ' + (sections.length + 1);
          });
      });
  }

  getSectionsForCourse(courseId) {
    this.currentCourseId = courseId;

    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id === courseId) {
        this.currentCourseName = this.courses[i].title;
      }
    }

    this.sectionService
      .findSectionsForCourse(courseId)
      .then(sections => {
        this.sections = sections;
        this.section.name = this.currentCourseName + ' Section ' + (sections.length + 1);
      });
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }
}

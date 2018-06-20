export class CourseServiceClient {
  // COURSE_URL = 'http://localhost:8080/api/course';
  COURSE_URL = 'https://stern-webdev-angular.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}

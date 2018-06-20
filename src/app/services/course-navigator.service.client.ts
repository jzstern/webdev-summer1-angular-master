export class CourseNavigatorServiceClient {
  COURSE_URL = 'https://stern-webdev-angular.herokuapp.com/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch(this.COURSE_URL + courseId + '/module')
      .then(response => response.json());
  }
}

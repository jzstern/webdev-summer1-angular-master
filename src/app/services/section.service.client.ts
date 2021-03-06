export class SectionServiceClient {

  // SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
  SECTION_URL = 'http://stern-webdev-angular.herokuapp.com/api/course/COURSEID/section';
  HEROKU_URL = 'https://stern-webdev-angular.herokuapp.com/api/';

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then((response) => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = this.HEROKU_URL + 'section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  unenrollStudentInSection(enrollment) {
    // /api/student/:sid/section/:kid
    const url = this.HEROKU_URL + 'section/' + enrollment.section._id + '/enrollment/' + enrollment._id;
    return fetch(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'POST',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateSection(section) {
    return fetch (this.HEROKU_URL + 'section/' + section._id, {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch(this.HEROKU_URL + 'section/' + sectionId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}

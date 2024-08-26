export const getAcademyList = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('/server/db.json') // Percorso corretto al file JSON
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const courses = data.course_details;

          if (id) {
            const course = courses.find(course => course.id === id);
            if (course) {
              resolve(course);
            } else {
              reject(new Error("Course not found"));
            }
          } else {
            resolve(courses);
          }
        })
        .catch(error => {
          reject(error);
        });
    }, 2000);
  });
};

export const addAcademyCourse = (body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...body,
        id: crypto.randomUUID(),
      });
    }, 3000);
  });
};

export const editAcademyCourse = (body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...body,
      });
    }, 3000);
  });
};

export const getAcademyList = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const courses = [
        {
          id: "1",
          title: "React Basics",
          category: "Informatica",
          instructor: "Mario Rossi",
          duration: "3 hours",
          genre: "Programming",
          description: "Learn the basics of React.",
          cover: "https://miro.medium.com/v2/resize:fit:680/1*C4yGTDSLSz86TCakrza2HQ.jpeg"
        },
        {
          id: "2",
          title: "Advanced CSS",
          category: "Informatica",
          instructor: "Giulia Verdi",
          duration: "4 hours",
          genre: "Design",
          description: "Master advanced CSS techniques.",
          cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgq3ySvdsfVDPeTC_Ep4mrnpifaii2-PQtRQ&s"
        },
        {
          id: "3",
          title: "Node.js for Beginners",
          category: "Informatica",
          instructor: "Luca Bianchi",
          duration: "2 hours",
          genre: "Programming",
          description: "Get started with Node.js.",
          cover: "https://media.geeksforgeeks.org/wp-content/uploads/20230726113229/Concept-of-nodejs.webp"
        }
      ];

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
    }, 2000);
  });
};

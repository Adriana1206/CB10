export const getAcademyList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            title: "React Basics",
            category: "Informatica",
            instructor: "Mario Rossi",
            duration: "3 hours"
          },
          {
            id: "2",
            title: "Advanced CSS",
            category: "Informatica",
            instructor: "Giulia Verdi",
            duration: "4 hours"
          },
          {
            id: "3",
            title: "Node.js for Beginners",
            category: "Informatica",
            instructor: "Luca Bianchi",
            duration: "2 hours"
          }
        ]);
      }, 2000);
    });
  };
  
  /* 
  export const getAcademyList = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    } catch (error) {
      throw new Error("Error:", error);
    }
  }; 
  */
  
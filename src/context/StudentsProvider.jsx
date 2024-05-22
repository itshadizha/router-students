import React, { createContext, useState, useEffect } from "react";

// URL for the API
const URL = "https://api-v2.elchocrud.pro/api/v1/98ad2ae5e04c5a76f157a2ef9a01c95b/students";

// Create the context
export const StudentsContext = createContext();

// Provider component
export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const postStudents = async (newStudent) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      const newData = await response.json();
      setStudents((prevStudents) => [...prevStudents, newData]);
      getStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StudentsContext.Provider value={{ students, postStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};

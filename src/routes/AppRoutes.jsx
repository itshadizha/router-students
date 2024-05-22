import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddStudents from "../pages/AddStudents";
import EditStudents from "../pages/EditStudents";
import StudentsTable from "../pages/StudentsTable";
import EditingStudent from "../pages/EditingStudent";

const URL =
  "https://api-v2.elchocrud.pro/api/v1/98ad2ae5e04c5a76f157a2ef9a01c95b/students";

const AppRoutes = () => {
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

  const deleteStudent = async (id) => {
    try {
      await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });
      getStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const editStudent = async (id, updatedStudent) => {
    try {
      await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });
      getStudents();
    } catch (error) {
      console.log(error);
    }
  };

 const  onSubmitEdited = (updatedStudent) => {
    editStudent(updatedStudent);
  };

  const onSubmit = (student) => {
    postStudents(student);
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <StudentsTable students={students} deleteStudent={deleteStudent} />
      ),
    },
    {
      path: "/add",
      element: <AddStudents onSubmit={onSubmit} />,
    },
    {
      path: "/edit",
      element: <EditStudents />,
    },
    {
        path: "/edit/:id",
        element: <EditingStudent onSubmitEdited={onSubmitEdited} students={students} />,
      },
  ]);


  return <RouterProvider router={routes} />;
};

export default AppRoutes;

import React from "react";
import { NavLink,  } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StudentsTable = ({ students,deleteStudent }) => {

  return (
    <Wrapper>
      <StyledNavLink to="/add">ADD STUDENT</StyledNavLink>
      <StyledTable>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.gender}</td>
              <td>{student.city}</td>
              <td>
                <Button onClick={() => deleteStudent(student._id)}>Delete</Button>
                <Link to={`/edit/${student._id}`}> Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default StudentsTable;

const Wrapper = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #602481;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #602481;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  
  thead {
    background-color: #8c00ff;
    color: white;
    
    th {
      padding: 10px;
      text-align: left;
    }
  }
  
  tbody {
    tr {
      &:nth-child(even) {
        background-color: #f9f9f9;
      }

      &:hover {
        background-color: #f1f1f1;
      }
      
      td {
        padding: 10px;
        border: 1px solid #ddd;
      }
    }
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #8c00ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #7d00b3;
  }
`;
